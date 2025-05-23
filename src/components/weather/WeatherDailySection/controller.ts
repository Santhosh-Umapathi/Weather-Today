import {useQuery} from '@tanstack/react-query';
import {TController} from './types';
import {getFullWeather} from '../../../api';
import {generateWeatherQueryKey} from '../../../helpers';

export const useController = ({lat, lon}: TController) => {
  const queryKey = generateWeatherQueryKey({lat, lon});

  const {data, isLoading, isError} = useQuery({
    enabled: !!(lat && lon),
    queryKey,
    queryFn: () => getFullWeather({lat, lon}),
  });

  return {data};
};
