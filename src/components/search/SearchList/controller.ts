import {useNavigation} from '@react-navigation/native';
import {useWeatherStore} from '../../../store';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TSearchScreenProps} from '../../../screens/Search/types';
import {ROUTES} from '../../../const';

export const useController = () => {
  const {navigate} = useNavigation<TSearchScreenProps['navigation']>();
  const {bottom} = useSafeAreaInsets();

  const filteredCities = useWeatherStore(store => store.filteredCities);
  const paddingBottom = bottom + 24;

  const goToSearchDetails = (city: string) => {
    navigate(ROUTES.SEARCH_DETAILS, {
      city,
    });
  };

  return {goToSearchDetails, filteredCities, paddingBottom};
};
