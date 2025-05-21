import {TCoordinates} from './types';
import {TCoordinatesBE} from '../../api/weather/types';

// City Name to Coordinates
export const mapCoordinatesToDTO = (data: TCoordinatesBE[]): TCoordinates => {
  return {lat: data[0].lat, lon: data[0].lon};
};
