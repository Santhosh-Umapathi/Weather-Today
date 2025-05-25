import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../const';
import {formatDate} from '../../../helpers';
import {THomeScreenProps} from '../../../screens';
import {TController} from './types';

export const useController = ({id}: TController) => {
  const navigation = useNavigation<THomeScreenProps['navigation']>();

  const date = formatDate(new Date().toString());

  const goToSearch = () => {
    navigation.navigate(ROUTES.SEARCH, {
      id,
    });
  };

  return {
    date,
    goToSearch,
  };
};
