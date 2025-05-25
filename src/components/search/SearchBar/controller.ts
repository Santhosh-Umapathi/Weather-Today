import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {TSavedSearches} from '../../../storage/types';
import {getData, saveData} from '../../../storage';
import {useWeatherStore} from '../../../store';
import {useQuery} from '@tanstack/react-query';
import {getCities} from '../../../api';
import debounce from 'lodash.debounce';
import {TextInput} from 'react-native';
import {TController} from './types';
import {useFocusEffect} from '@react-navigation/native';

export const useController = ({setShowRecentSearches}: TController) => {
  const setFilteredCities = useWeatherStore(store => store.setFilteredCities);
  const autoSuggestionSearchText = useWeatherStore(store => store.searchText);

  const [searchText, setSearchText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchInputRef = useRef<TextInput>(null);

  const {data: cities} = useQuery({
    queryKey: ['cities'],
    queryFn: () => getCities(),
    staleTime: 1000 * 60 * 60 * 24, // 24h
    gcTime: 1000 * 60 * 60 * 24 * 24, // 24d
  });

  const isClearIconVisible = searchText.length > 0;

  // Save recent searches to local storage
  const saveRecentSearches = useCallback((search: string) => {
    const savedSearches: TSavedSearches | undefined = getData('savedSearches');

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
  }, []);

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
    [cities, saveRecentSearches, setFilteredCities],
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
    [setFilteredCities, updateFilteredCities],
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
    setIsInputFocused(false);
  };

  // Handle input change
  const onChangeText = useCallback(
    (text: string) => {
      const value = text;
      setSearchText(value);
      // Search for cities
      debouncedSearch(value);
    },
    [debouncedSearch],
  );

  // Clear search input
  const clearSearch = useCallback(() => {
    setSearchText('');
    searchInputRef.current?.blur();
    setIsInputFocused(false);
    setFilteredCities([]);
  }, [setFilteredCities, setIsInputFocused]);

  //Show/Hide recent searches dropdown
  useEffect(() => {
    const savedSearches: TSavedSearches | undefined = getData('savedSearches');

    if (
      searchText.length < 1 &&
      isInputFocused &&
      savedSearches !== undefined
    ) {
      console.log(searchText.length < 1, isInputFocused, savedSearches);
      console.log('true');
      setShowRecentSearches(true);
    } else {
      console.log('false');
      setShowRecentSearches(false);
    }
  }, [setShowRecentSearches, searchText.length, isInputFocused]);

  // Set Auto-Suggestion to Search bar
  useEffect(() => {
    if (autoSuggestionSearchText) {
      onChangeText(autoSuggestionSearchText);
      // Clear Global store for auto suggestion text
      useWeatherStore.getState().setSearchText('');
    }
  }, [autoSuggestionSearchText, onChangeText]);

  useFocusEffect(
    useCallback(() => {
      // Clear Search on losing focus
      return () => {
        clearSearch();
      };
    }, [clearSearch]),
  );

  return {
    searchText,
    isClearIconVisible,
    searchLocation,
    onChangeText,
    onFocus,
    onBlur,
    clearSearch,
    searchInputRef,
  };
};
