//------------------------------------------------------------------
//MARK: Request Types
//------------------------------------------------------------------
export type TGetCoordinates = {
  city: string;
};

export type TGetWeather = {
  lat?: number;
  lon?: number;
  city?: string;
};

//------------------------------------------------------------------
//MARK: Data Types
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
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type TForecastBE = {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
};

type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
  pod: string;
};

type Clouds = {
  all: number;
};

type Rain = {
  [key: string]: number;
};

type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

type Main = {
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

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Coord = {
  lon: number;
  lat: number;
};

type City = {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

type List = {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: Sys;
  dt_txt: string;
};
