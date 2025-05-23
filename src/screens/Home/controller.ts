import {useQuery} from '@tanstack/react-query';
import {getFullWeather} from '../../api';
import {TWeatherDataCardProps} from '../../components';
import {generateWeatherQueryKey, generateWeatherType} from '../../helpers';
import {colors} from '../../tokens';
import {TController} from './types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useWeatherStore} from '../../store';

export const useController = ({}: TController) => {
  const {top, bottom} = useSafeAreaInsets();

  const location = useWeatherStore(store =>
    store.locations.find(item => item.isPrimary),
  );

  const queryKey = generateWeatherQueryKey({
    lat: location?.lat,
    lon: location?.lon,
  });

  console.log(queryKey);

  const {data, isLoading, isError} = useQuery({
    enabled: !!location?.lat && !!location?.lon,
    queryKey,
    queryFn: () => getFullWeather({lat: location?.lat, lon: location?.lon}),
    staleTime: 60000 * 5, // 5 mins
    gcTime: 60000 * 10, // 10 mins
  });

  const gradientColors =
    colors.weatherColors[generateWeatherType(data?.current.main.id || 0)];

  const weatherData: TWeatherDataCardProps[] = [
    {
      icon: 'feelsLike',
      title: 'Feels Like',
      value: `${data?.current.main.feelsLike.toFixed(0)} °C`,
    },
    {
      icon: 'humidity',
      title: 'Humidity',
      value: `${data?.current.main.humidity.toFixed(0)} %`,
    },
    {
      icon: 'windSpeed',
      title: 'Wind Speed',
      value: `${data?.current.main.windSpeed.toFixed(0)} km/h`,
    },
  ];

  const contentContainerStyle = {
    paddingTop: top + 24,
    paddingBottom: bottom + 24,
  };

  return {
    weatherData,
    gradientColors,
    data,
    contentContainerStyle,
    location,
  };
};
