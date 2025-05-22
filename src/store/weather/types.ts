import {TCoordinates} from '../../dto';

//Types for Weather State
export type TWeatherState = {
  location: TCoordinates | null;
  isLocationEnabled: boolean | null;
};

//Types for Weather Actions
export type TWeatherActions = {
  setLocation: (location: TCoordinates) => void;
  setIsLocationEnabled: (isLocationEnabled: boolean) => void;
};

//Types for Global Store
export type TWeatherStore = TWeatherState & TWeatherActions;

//------------------------------------------------------------------
//MARK: Sub Types
//------------------------------------------------------------------
export type TSet = {
  (
    partial:
      | TWeatherStore
      | Partial<TWeatherStore>
      | ((state: TWeatherStore) => TWeatherStore | Partial<TWeatherStore>),
    replace?: false,
  ): void;
  (
    state: TWeatherStore | ((state: TWeatherStore) => TWeatherStore),
    replace: true,
  ): void;
};

export type TGet = () => TWeatherStore;
