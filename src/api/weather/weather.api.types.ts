//------------------------------------------------------------------
//MARK: Request Types
//------------------------------------------------------------------
export type TGetCoordinates = {
  city: string;
};

export type TGetWeather = {
  lat: number;
  lon: number;
};

export type TGetFullWeather = Partial<TGetWeather & TGetCoordinates>;

//------------------------------------------------------------------
//MARK: Data Types - Server Response
//------------------------------------------------------------------
export type TCoordinatesBE = {
  name: string;
  local_names: Object;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

export type TWeatherBE = {
  coord: TCoord;
  weather: TWeather[];
  base: string;
  main: TMain;
  visibility: number;
  wind: TWind;
  rain: TRain;
  clouds: TClouds;
  dt: number;
  sys: TSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type TForecastBE = {
  cod: string;
  message: number;
  cnt: number;
  list: TList[];
  city: TCity;
};

//------------------------------------------------------------------
//MARK: Data Types - Subtypes
//------------------------------------------------------------------

type TSys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
  pod: string;
};

type TClouds = {
  all: number;
};

type TRain = {
  [key: string]: number;
};

type TWind = {
  speed: number;
  deg: number;
  gust: number;
};

type TMain = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

type TWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type TCoord = {
  lon: number;
  lat: number;
};

type TCity = {
  id: number;
  name: string;
  coord: TCoord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

type TList = {
  dt: number;
  main: TMain;
  weather: TWeather[];
  clouds: TClouds;
  wind: TWind;
  visibility: number;
  pop: number;
  rain?: TRain;
  sys: TSys;
  dt_txt: string;
};
