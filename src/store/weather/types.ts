import {TCity, TCoordinates} from '../../dto';

//Types for Weather State
export type TWeatherState = {
  searchText: string;
  filteredCities: TCity[];
  primaryLocation: TCoordinates | undefined;
};

//Types for Weather Actions
export type TWeatherActions = {
  setSearchText: (payload: string) => void;
  setFilteredCities: (payload: TCity[]) => void;
  setPrimaryLocation: (payload: TCoordinates | undefined) => void;
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
