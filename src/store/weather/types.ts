//Types for Weather State
export type TWeatherState = {};

//Types for Weather Actions
export type TWeatherActions = {};

//Types for Global Store
export type TWeatherStore = TWeatherState & TWeatherActions;

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
