import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {generateWeatherQueryKey, generateWeatherType} from '../../helpers';
import {colors} from '../../tokens';
import {useWeatherStore} from '../../store';
import {useQuery} from '@tanstack/react-query';
import {getCities, getFullWeather} from '../../api';
import {useNavigation} from '@react-navigation/native';
import {useCallback, useMemo, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {getData, saveData} from '../../storage';
import debounce from 'lodash.debounce';
import {TCity} from '../../dto';
import {TSavedSearches} from '../../storage/types';

export const useController = () => {
  const {top, bottom} = useSafeAreaInsets();
  const {goBack} = useNavigation();

  const locations = useWeatherStore(store => store.locations);
  const location = useWeatherStore(store =>
    store.locations.find(item => item.isPrimary),
  );
  const queryKey = generateWeatherQueryKey({
    lat: location?.lat,
    lon: location?.lon,
  });

  const {data} = useQuery({
    enabled: !!(location?.lat && location?.lon),
    queryKey,
    queryFn: () => getFullWeather({lat: location?.lat, lon: location?.lon}),
  });

  const {data: cities} = useQuery({
    queryKey: ['cities'],
    queryFn: () => getCities(),
    staleTime: 1000 * 60 * 60 * 24, // 24h
    gcTime: 1000 * 60 * 60 * 24 * 24, // 24d
  });

  const [searchText, setSearchText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [filteredCities, setFilteredCities] = useState<TCity[]>([]);
  const searchInputRef = useRef<TextInput>(null);
  const isClearIconVisible = searchText.length > 0;

  const savedSearches: TSavedSearches | undefined = getData('savedSearches');

  //Show/Hide recent searches dropdown
  const showRecentSearches = !!(
    searchText.length < 1 &&
    isInputFocused &&
    savedSearches
  );

  const id = data?.current.main.id || 0;
  const gradientColors = colors.weatherColors[generateWeatherType(id)];
  const paddingTop = top + 24;
  const paddingBottom = bottom + 24;

  // Save recent searches to local storage
  const saveRecentSearches = useCallback(
    (search: string) => {
      // Create a new search object
      if (!savedSearches) {
        const newSearch: TSavedSearches = [
          {
            id: Date.now(),
            search,
          },
        ];
        saveData('savedSearches', newSearch);
        return;
      }

      // Check if search already exists
      const searchExists = savedSearches.some(item => item.search === search);

      // Only add the search if it doesn't already exist
      if (!searchExists) {
        const updatedSearches = [...savedSearches, {id: Date.now(), search}];

        // Save updated recent searches to local storage
        saveData('savedSearches', updatedSearches);
      }
    },
    [savedSearches],
  );

  const updateFilteredCities = useCallback(
    (text: string) => {
      // Sanitize search text - Remove leading and trailing spaces, convert to lowercase
      const sanitizedSearchText = text.trim().toLowerCase();

      const results = cities?.filter(item => {
        return item.name.toLowerCase().includes(sanitizedSearchText);
      });

      if (results) {
        setFilteredCities(results);
        // Save recent searches to local storage
        saveRecentSearches(sanitizedSearchText);
      }
    },
    [cities, saveRecentSearches],
  );

  const searchLocation = () => {
    // Clear search results if the input is empty
    if (!searchText) {
      // Clear stored search results
      setFilteredCities([]);
      return;
    }

    updateFilteredCities(searchText);
  };

  // Debounce the search function to limit the number of API calls
  const debouncedSearch = useMemo(
    () =>
      debounce(async (value: string) => {
        // Clear search results if the input is empty
        if (!value) {
          // Clear stored search results
          setFilteredCities([]);
          return;
        }

        // Return early if searchText is empty or less than 4 characters
        if (value.length < 4) {
          return;
        }

        updateFilteredCities(value);
      }, 500),
    [updateFilteredCities],
  );

  // Refetch data on focus if search text is not empty
  const onFocus = () => {
    if (searchText.length > 0) {
      // If search text is not empty, fetch results
      debouncedSearch(searchText);
    }
    setIsInputFocused(true);
  };

  // Hide Recent Searches when input is blurred
  const onBlur = () => {
    // Slight delay to allow click events to register
    // setTimeout(() =>
    setIsInputFocused(false);
    // , 300);
  };

  // Handle input change
  const onChangeText = (text: string) => {
    const value = text;
    setSearchText(value);
    // Search for cities
    debouncedSearch(value);
  };

  // const handleClickOutside = useCallback(
  //   (event: MouseEvent) => {
  //     if (
  //       searchResultsRef.current &&
  //       !searchResultsRef.current.contains(event.target as Node) &&
  //       searchInputRef.current &&
  //       !searchInputRef.current.contains(event.target as Node)
  //     ) {
  //       // Clear search results if clicked outside
  //       clearStoreSearchResults();
  //     }
  //   },
  //   [clearStoreSearchResults],
  // );

  // Handle click on recent search
  // const recentSearchClick = (search: string) => {
  //   setSearchText(search);

  //   // Delayed focus to complete blur event trigger to complete
  //   setTimeout(() => {
  //     searchInputRef.current?.focus();
  //     setIsInputFocused(true);
  //   }, 300);
  // };

  // Clear search input
  const clearSearch = () => {
    setSearchText('');
    searchInputRef.current?.blur();
    setIsInputFocused(false);
    setFilteredCities([]);
  };

  // Handle click outside of the search results and input
  // useEffect(() => {
  //   // Add event listener
  //   // document.addEventListener('mousedown', handleClickOutside);

  //   // Clean up
  //   return () => {
  //     // document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [handleClickOutside]);

  return {
    gradientColors,
    clearSearch,
    searchLocation,
    goBack,
    locations,
    paddingBottom,
    paddingTop,
    searchInputRef,
    isClearIconVisible,
    onChangeText,
    searchText,
    onFocus,
    onBlur,
    filteredCities,
    savedSearches,
    showRecentSearches,
  };
};
