import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import {TCoordinates} from '../dto';

export const useLocation = () => {
  const [location, setLocation] = useState<TCoordinates>();
  const [isRequestingPermissions, setIsRequestingPermissions] = useState(true);

  // Get/Set the current location
  useEffect(() => {
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
        console.log('Error getting location:', error);
      },
    );
  }, []);

  return {
    isRequestingPermissions,
    location,
  };
};
