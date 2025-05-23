import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getData} from '../../../storage';
import {TSavedSearches} from '../../../storage/types';
import {useWeatherStore} from '../../../store';

export const useController = () => {
  const {bottom} = useSafeAreaInsets();

  const savedSearches: TSavedSearches | undefined = getData('savedSearches');
  const paddingBottom = bottom + 24;

  // Set the Auto-suggestion in Search Bar
  const setSearchText = (searchText: string) => {
    useWeatherStore.getState().setSearchText(searchText);
  };

  return {setSearchText, savedSearches, paddingBottom};
};
