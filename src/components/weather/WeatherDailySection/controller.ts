import {useQuery} from '@tanstack/react-query';
import {TController} from './types';
import {getFullWeather} from '../../../api';

export const useController = ({lat, lon}: TController) => {
  const {data, isLoading, isError} = useQuery({
    enabled: !!(lat && lon),
    queryKey: [JSON.stringify({lat, lon})],
    queryFn: () => getFullWeather({lat, lon}),
  });

  return {data};
};
