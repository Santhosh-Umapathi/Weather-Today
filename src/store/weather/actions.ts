import {TSet, TWeatherActions} from './types';

export const actions = (set: TSet) =>
  ({
    setLocation: ({lat, lon}) => {
      set(state => ({
        ...state,
        location: {
          lat,
          lon,
        },
      }));
    },
    setIsLocationEnabled: isLocationEnabled => {
      set(state => ({
        ...state,
        isLocationEnabled,
      }));
    },
  } as TWeatherActions);
