import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {generateWeatherType} from '../../helpers';
import {colors} from '../../tokens';
import {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {TSearchScreenProps} from './types';
import {Keyboard} from 'react-native';

export const useController = () => {
  const {top} = useSafeAreaInsets();
  // Route Params from Search screen
  const route = useRoute<TSearchScreenProps['route']>();
  const id = route.params.id;

  const [showRecentSearches, setShowRecentSearches] = useState(false);

  const gradientColors = colors.weatherColors[generateWeatherType(id)];
  const paddingTop = top + 24;

  // Dismiss keyboard from clicking outside of Search Bar
  const handleOutsideClick = () => {
    Keyboard.dismiss();
  };

  return {
    gradientColors,
    paddingTop,
    showRecentSearches,
    setShowRecentSearches,
    handleOutsideClick,
  };
};
