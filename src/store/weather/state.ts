import {TWeatherState} from './types';

// Weather Store Initial State
export const state: TWeatherState = {
  isLocationEnabled: null,
  searchText: '',
  filteredCities: [],
};
