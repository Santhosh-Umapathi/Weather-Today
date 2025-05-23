import {TCity, TCoordinates} from '../../dto';

//Types for Weather State
export type TWeatherState = {
  isLocationEnabled: boolean | null;
  locations: TLocations;
  searchText: string;
  filteredCities: TCity[];
};

//Types for Weather Actions
export type TWeatherActions = {
  setIsLocationEnabled: (isLocationEnabled: boolean) => void;
  setLocations: (payload: TLocation) => void;
  setSearchText: (payload: string) => void;
  setFilteredCities: (payload: TCity[]) => void;
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

export type TLocation = TCoordinates & {
  isPrimary?: boolean;
  isSaved?: boolean;
  isDeviceLocation?: boolean;
};

export type TLocations = TLocation[];
