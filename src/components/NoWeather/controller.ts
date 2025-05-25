import {useNavigation} from '@react-navigation/native';
import {Linking} from 'react-native';
import {ROUTES} from '../../const';
import {THomeScreenProps} from '../../screens';

export const useController = () => {
  const {navigate} = useNavigation<THomeScreenProps['navigation']>();

  const goToSearch = () => {
    navigate(ROUTES.SEARCH, {
      id: 0, // No location available
    });
  };

  const openSettings = () => Linking.openSettings();

  return {goToSearch, openSettings};
};
