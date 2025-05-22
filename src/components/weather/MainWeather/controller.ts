import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../const';
import {formatDate} from '../../../helpers';

export const useController = () => {
  const navigation = useNavigation();

  const date = formatDate(new Date().toString());

  const goToSearch = () => {
    navigation.navigate(ROUTES.SEARCH);
  };

  return {date, goToSearch};
};
