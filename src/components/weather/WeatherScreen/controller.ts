import {useQuery} from '@tanstack/react-query';
import {getFullWeather} from '../../../api';
import {TWeatherDataCardProps} from '../';
import {generateWeatherQueryKey, generateWeatherType} from '../../../helpers';
import {colors} from '../../../tokens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {TSearchDetailsScreenProps} from '../../../screens/SearchDetails/types';
import {TController} from './types';

export const useController = (params: TController) => {
  const {top, bottom} = useSafeAreaInsets();

  // Route Params from Search Details screen
  const route = useRoute<TSearchDetailsScreenProps['route']>();
  const routeParamLat = route.params?.lat;
  const routeParamLon = route.params?.lon;
  const routeParamCity = route.params?.city;

  const lat = routeParamLat || params?.lat; // Either Search location or Home device location
  const lon = routeParamLon || params?.lon;

  const queryKey = routeParamCity
    ? [routeParamCity]
    : generateWeatherQueryKey({
        lat,
        lon,
      });

  const {data, isLoading, isError} = useQuery({
    enabled: routeParamCity ? true : !!(lat && lon),
    queryKey,
    queryFn: () => getFullWeather({lat, lon, city: routeParamCity}),
    staleTime: 1000 * 60 * 5, // 5 mins
    gcTime: 60000 * 10, // 10 mins
    refetchOnMount: false,
    refetchOnWindowFocus: false,
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

  const canGoToSearch = route.params === undefined;

  return {
    weatherData,
    gradientColors,
    data,
    contentContainerStyle,
    canGoToSearch,
    routeParamCity,
    queryKey,
    lat,
    lon,
  };
};
