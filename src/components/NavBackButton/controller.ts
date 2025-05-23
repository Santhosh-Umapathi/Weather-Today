import {useNavigation} from '@react-navigation/native';

export const useController = () => {
  const {goBack} = useNavigation();

  return {goBack};
};
