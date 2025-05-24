import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../const';
import {formatDate} from '../../../helpers';
import {THomeScreenProps} from '../../../screens';
import {useState} from 'react';
import {useWeatherStore} from '../../../store';

export const useController = () => {
  const navigation = useNavigation<THomeScreenProps['navigation']>();
  const setLocations = useWeatherStore(store => store.setLocations);

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isPrimary, setIsPrimary] = useState(false);

  const date = formatDate(new Date().toString());

  const goToSearch = () => {
    navigation.navigate(ROUTES.SEARCH);
  };

  const updateBookmarkLocation = () => {
    //If Bookmark removed, also remove Primary
    if (isBookmarked) {
      isPrimary && setIsPrimary(false);
    }

    setIsBookmarked(prev => !prev);
    // setLocations()
  };

  const updatePrimaryLocation = () => {
    //If Primary added, also add Bookmark
    if (!isPrimary) {
      !isBookmarked && setIsBookmarked(true);
    }

    setIsPrimary(prev => !prev);
    // setLocations()
  };

  return {
    date,
    goToSearch,
    updateBookmarkLocation,
    updatePrimaryLocation,
    isBookmarked,
    isPrimary,
  };
};
