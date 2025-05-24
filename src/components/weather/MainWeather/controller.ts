import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../const';
import {formatDate} from '../../../helpers';
import {THomeScreenProps} from '../../../screens';
import {useState} from 'react';

export const useController = () => {
  const navigation = useNavigation<THomeScreenProps['navigation']>();

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
  };

  const updatePrimaryLocation = () => {
    //If Primary added, also add Bookmark
    if (!isPrimary) {
      !isBookmarked && setIsBookmarked(true);
    }

    setIsPrimary(prev => !prev);
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
