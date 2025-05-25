import {useNavigation, useRoute} from '@react-navigation/native';
import {ROUTES} from '../../../const';
import {formatDate} from '../../../helpers';
import {THomeScreenProps} from '../../../screens';
import {useState} from 'react';
import {useWeatherStore} from '../../../store';
import {TSearchDetailsScreenProps} from '../../../screens/SearchDetails/types';

export const useController = ({}) => {
  const navigation = useNavigation<THomeScreenProps['navigation']>();
  const locations = useWeatherStore(store => store.locations);
  const setLocations = useWeatherStore(store => store.setLocations);

  // console.log('locations', locations);

  // Search Details screen
  const route = useRoute<TSearchDetailsScreenProps['route']>();
  const lat = route.params?.lat;
  const lon = route.params?.lon;
  const city = route.params?.city;
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
    // setLocations({
    //   lat,
    //   lon,
    //   city,
    //   isSaved: !isBookmarked,
    // });
  };

  const updatePrimaryLocation = () => {
    //If Primary added, also add Bookmark
    if (!isPrimary) {
      !isBookmarked && setIsBookmarked(true);
    }

    setIsPrimary(prev => !prev);
    // setLocations({
    //   lat,
    //   lon,
    //   city,
    //   isPrimary: !isPrimary,
    // });
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
