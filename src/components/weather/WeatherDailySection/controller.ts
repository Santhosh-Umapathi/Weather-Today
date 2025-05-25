import {useQuery} from '@tanstack/react-query';
import {TController} from './types';
import {getFullWeather} from '../../../api';
import {generateWeatherQueryKey} from '../../../helpers';

export const useController = ({lat, lon, city}: TController) => {
  const queryKey = city
    ? [city]
    : generateWeatherQueryKey({
        lat,
        lon,
      });

  const {data} = useQuery({
    enabled: city ? true : !!(lat && lon),
    queryKey,
    queryFn: () => getFullWeather({lat, lon, city}),
    staleTime: 1000 * 60 * 5, // 5 mins
    gcTime: 60000 * 10, // 10 mins
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {data};
};
