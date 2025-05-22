import {TCoordinates} from './weather.dto.types';
import {TCoordinatesBE} from '../../api';

// City Name to Coordinates
export const mapCoordinatesToDTO = (
  data: TCoordinatesBE[],
): TCoordinates | null => {
  // No coordinates found
  if (!data || data.length === 0) {
    return null;
  }

  const coordinates = {
    lat: data[0].lat,
    lon: data[0].lon,
  };

  return coordinates;
};
