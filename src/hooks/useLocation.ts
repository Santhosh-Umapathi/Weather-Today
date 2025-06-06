import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import {TCoordinates} from '../dto';
import {useWeatherStore} from '../store';

export const useLocation = () => {
  const [location, setLocation] = useState<TCoordinates>();
  const [isRequestingPermissions, setIsRequestingPermissions] = useState(true);
  const primaryLocation = useWeatherStore(store => store.primaryLocation);

  // Get/Set the current location
  useEffect(() => {
    // Set the Device Geo Location
    if (!primaryLocation) {
      Geolocation.getCurrentPosition(
        success => {
          const coords = {
            lat: success.coords.latitude,
            lon: success.coords.longitude,
          };

          setLocation(coords);
          setIsRequestingPermissions(false);
        },
        error => {
          setIsRequestingPermissions(false);
          setLocation(undefined);
          console.log('Error getting location:', error);
        },
      );
    }
    // Set the manual override location
    else {
      setLocation(primaryLocation);
    }
  }, [primaryLocation]);

  return {
    isRequestingPermissions,
    location,
  };
};
