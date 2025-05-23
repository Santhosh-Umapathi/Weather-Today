import {TCoordinates} from '../dto';

// Query key for Weather API's
export const generateWeatherQueryKey = ({lat, lon}: Partial<TCoordinates>) => {
  const queryKey = [
    JSON.stringify({
      lat: lat?.toFixed(1),
      lon: lon?.toFixed(1),
    }),
  ];

  return queryKey;
};
