import {deleteData, saveData} from '../../storage';
import {TSet, TWeatherActions} from './types';

export const actions = (set: TSet) =>
  ({
    setSearchText: searchText => {
      set(state => ({
        ...state,
        searchText,
      }));
    },
    setFilteredCities: cities => {
      set(state => ({
        ...state,
        filteredCities: cities,
      }));
    },
    setPrimaryLocation: location => {
      //Add/Remove primary location from storage
      if (location) {
        saveData('primaryLocation', location);
      } else {
        deleteData('primaryLocation');
      }
      set(state => ({
        ...state,
        primaryLocation: location,
      }));
    },
  } as TWeatherActions);
