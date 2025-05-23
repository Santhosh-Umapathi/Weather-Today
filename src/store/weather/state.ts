import {getData} from '../../storage';
import {TWeatherState} from './types';

// Weather Store Initial State
export const state: TWeatherState = {
  isLocationEnabled: null,
  locations: getData('locations') || [],
  searchText: '',
  filteredCities: [],
};
