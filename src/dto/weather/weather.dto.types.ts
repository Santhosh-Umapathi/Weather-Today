export type TCoordinates = {
  lat: number;
  lon: number;
};

export type TWeather = {
  id: string;
  name: string;
  main: {
    id: number;
    temperature: number;
    humidity: number;
    windSpeed: number;
    feelsLike: number;
    icon: string;
    weather: string;
  };
  coordinates: TCoordinates;
};

export type TForecast = {
  minTemperature: number;
  maxTemperature: number;
  icon: string;
  date: string;
};

export type TFullWeather = {
  current: TWeather;
  forecast: TForecast[];
};
