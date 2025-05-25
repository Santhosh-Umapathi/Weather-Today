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
  } as TWeatherActions);
