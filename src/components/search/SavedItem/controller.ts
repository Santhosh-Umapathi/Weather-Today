import {TController} from './types';
import {generateWeatherQueryKey} from '../../../helpers';
import {useQuery} from '@tanstack/react-query';
import {getFullWeather} from '../../../api';
import {useNavigation} from '@react-navigation/native';
import {TSearchScreenProps} from '../../../screens/Search/types';
import {ROUTES} from '../../../const';

export const useController = ({lat, lon}: TController) => {
  const {navigate} = useNavigation<TSearchScreenProps['navigation']>();
  const queryKey = generateWeatherQueryKey({lat, lon});

  const {data, isLoading, isError} = useQuery({
    enabled: !!(lat && lon),
    queryKey,
    queryFn: () => getFullWeather({lat, lon}),
  });

  const goToSearchDetails = () => {
    navigate(ROUTES.SEARCH_DETAILS, {
      lat,
      lon,
    });
  };

  return {data, goToSearchDetails};
};
