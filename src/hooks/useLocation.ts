import Geolocation from '@react-native-community/geolocation';
import {useCallback, useEffect} from 'react';
import {useWeatherStore} from '../store';
import {TCoordinates} from '../dto';

export const useLocation = () => {
  const updateDeviceLocation = useCallback(({lat, lon}: TCoordinates) => {
    const setLocations = useWeatherStore.getState().setLocations;

    setLocations({lat, lon, isDeviceLocation: true});
  }, []);

  // Get/Set the current location
  useEffect(() => {
    const setIsLocationEnabled =
      useWeatherStore.getState().setIsLocationEnabled;

    Geolocation.getCurrentPosition(
      success => {
        const coords = {
          lat: success.coords.latitude,
          lon: success.coords.longitude,
        };

        setIsLocationEnabled(true);
        updateDeviceLocation(coords);
      },
      error => {
        setIsLocationEnabled(false);
        console.log('Error getting location:', error);
      },
    );
  }, [updateDeviceLocation]);
};
