import {getData} from '../../storage';
import {TWeatherState} from './types';

// Weather Store Initial State
export const state: TWeatherState = {
  searchText: '', // Auto suggestion search text
  filteredCities: [],
  primaryLocation: getData('primaryLocation'),
};
