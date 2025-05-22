import {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {useWeatherStore} from '../store';

export const useSplash = () => {
  const isLocationEnabled = useWeatherStore(store => store.isLocationEnabled);

  // Hide the splash screen when the location is enabled/disabled
  useEffect(() => {
    if (isLocationEnabled !== null) {
      BootSplash.hide({fade: true});
    }
  }, [isLocationEnabled]);
};
