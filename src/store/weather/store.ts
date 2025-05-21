import {create} from 'zustand';
import {actions} from './actions';
import {state} from './state';
import {TWeatherStore} from './types';

// Weather store
export const useWeatherStore = create<TWeatherStore>((set, get) => ({
  ...state,
  ...actions(set, get),
}));
