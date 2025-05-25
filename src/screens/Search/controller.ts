import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {generateWeatherType} from '../../helpers';
import {colors} from '../../tokens';
import {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {TSearchScreenProps} from './types';

export const useController = () => {
  const {top} = useSafeAreaInsets();
  // Route Params from Search screen
  const route = useRoute<TSearchScreenProps['route']>();
  const id = route.params.id;

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showRecentSearches, setShowRecentSearches] = useState(false);

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
