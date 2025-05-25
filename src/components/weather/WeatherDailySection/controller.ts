import {useQuery} from '@tanstack/react-query';
import {TController} from './types';
import {getFullWeather} from '../../../api';

export const useController = ({lat, lon, city, queryKey}: TController) => {
  const {data, isLoading, isError} = useQuery({
    enabled: city ? true : !!(lat && lon),
    queryKey,
    queryFn: () => getFullWeather({lat, lon, city}),
  });

  return {data};
};
