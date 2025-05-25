import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getData} from '../../../storage';
import {TSavedSearches} from '../../../storage/types';
import {useWeatherStore} from '../../../store';
import {useEffect, useState} from 'react';

export const useController = () => {
  const {bottom} = useSafeAreaInsets();
  const [savedSearches, setSavedSearches] = useState<TSavedSearches>([]);
  const paddingBottom = bottom + 24;

  // Setting the Saved Searches list
  useEffect(() => {
    const savedSearchesStorage: TSavedSearches | undefined =
      getData('savedSearches');
    if (savedSearchesStorage) {
      setSavedSearches(savedSearchesStorage);
    }
  }, []);

  // Set the Auto-suggestion in Search Bar
  const setSearchText = (searchText: string) =>
    useWeatherStore.getState().setSearchText(searchText);

  return {setSearchText, savedSearches, paddingBottom};
};
