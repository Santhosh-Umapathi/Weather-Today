import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {generateWeatherQueryKey, generateWeatherType} from '../../helpers';
import {colors} from '../../tokens';
import {useWeatherStore} from '../../store';
import {useQuery} from '@tanstack/react-query';
import {getFullWeather} from '../../api';
import {useState} from 'react';

export const useController = () => {
  const {top} = useSafeAreaInsets();

  const location = useWeatherStore(store =>
    store.locations.find(item => item.isPrimary),
  );
  const queryKey = generateWeatherQueryKey({
    lat: location?.lat,
    lon: location?.lon,
  });

  const {data} = useQuery({
    enabled: !!(location?.lat && location?.lon),
    queryKey,
    queryFn: () => getFullWeather({lat: location?.lat, lon: location?.lon}),
  });

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showRecentSearches, setShowRecentSearches] = useState(false);

  const id = data?.current.main.id || 0;
  const gradientColors = colors.weatherColors[generateWeatherType(id)];
  const paddingTop = top + 24;

  return {
    gradientColors,
    paddingTop,
    showRecentSearches,
    isInputFocused,
    setIsInputFocused,
    setShowRecentSearches,
  };
};
