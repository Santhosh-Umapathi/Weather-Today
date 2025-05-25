import {useQuery} from '@tanstack/react-query';
import {getFullWeather} from '../../../api';
import {TWeatherDataCardProps} from '../';
import {generateWeatherQueryKey, generateWeatherType} from '../../../helpers';
import {colors} from '../../../tokens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {TSearchDetailsScreenProps} from '../../../screens/SearchDetails/types';
import {TController} from './types';
import {useEffect, useState} from 'react';
import {useWeatherStore} from '../../../store';

export const useController = (params: TController) => {
  const {top, bottom} = useSafeAreaInsets();
  const [isPrimary, setIsPrimary] = useState(false);

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
  const id = data?.current.main.id || 0;

  // Set the star status
  useEffect(() => {
    const primaryLocation = useWeatherStore.getState().primaryLocation;

    if (
      primaryLocation &&
      primaryLocation.lat === data?.current.coordinates.lat &&
      primaryLocation.lon === data?.current.coordinates.lon
    ) {
      setIsPrimary(true);
    }
  }, [data]);

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

  // Update Star status
  const updateIsPrimary = () => {
    setIsPrimary(prev => {
      // Manually override primary location in storage and global store
      const setPrimaryLocation = useWeatherStore.getState().setPrimaryLocation;
      const value = !prev;

      if (value) {
        if (data?.current.coordinates) {
          setPrimaryLocation({
            lat: data.current.coordinates.lat,
            lon: data.current.coordinates.lon,
          });
        }
      } else {
        setPrimaryLocation(undefined);
      }
      return value;
    });
  };

  return {
    weatherData,
    gradientColors,
    data,
    contentContainerStyle,
    canGoToSearch,
    routeParamCity,
    lat,
    lon,
    id,
    isPrimary,
    updateIsPrimary,
  };
};
