import Geolocation from '@react-native-community/geolocation';
import {useEffect} from 'react';
import {useWeatherStore} from '../store';

export const useLocation = () => {
  // Get/Set the current location
  useEffect(() => {
    const setLocation = useWeatherStore.getState().setLocation;
    const setIsLocationEnabled =
      useWeatherStore.getState().setIsLocationEnabled;

    Geolocation.getCurrentPosition(
      success => {
        setLocation({
          lat: success.coords.latitude,
          lon: success.coords.longitude,
        });
        setIsLocationEnabled(true);
      },
      error => {
        setIsLocationEnabled(false);
        console.log('Error getting location:', error);
      },
    );
  }, []);
};
