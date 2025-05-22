import {
  TCoordinates,
  TForecast,
  TFullWeather,
  TWeather,
} from './weather.dto.types';
import {TCoordinatesBE, TForecastBE, TWeatherBE} from '../../api';

// Convert to Coordinates DTO
export const mapCoordinatesToDTO = (
  data: TCoordinatesBE[],
): TCoordinates | null => {
  // No coordinates found
  if (!data || data.length === 0) {
    return null;
  }

  const coordinates = {
    lat: data[0].lat,
    lon: data[0].lon,
  };

  return coordinates;
};

// Convert to Weather DTO
export const mapWeatherToDTO = (data: TWeatherBE): TWeather | null => {
  // No data found
  if (!data) {
    return null;
  }

  // Create Weather DTO Object
  const weather: TWeather = {
    id: data.id.toString(),
    name: data.name,
    main: {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
      windSpeed: data.wind.speed,
      icon: data.weather[0].icon,
      weather: data.weather[0].main,
    },
  };

  return weather;
};

// Convert to Forecast DTO
export const mapForecastToDTO = (data: TForecastBE): TForecast[] => {
  let forecast: TForecast[] = [];

  // No data found
  if (!data || data.list.length === 0) {
    return forecast;
  }

  // Map through the list of forecast data
  data.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0]; // Remove hourly timestamp data

    // Check if the date already exists in the forecast array
    if (forecast.some(f => f.date === date)) {
      return;
    }

    // Create Forecast DTO for each day
    const forecastItem: TForecast = {
      date: date,
      icon: item.weather[0].icon,
      minTemperature: item.main.temp_min,
      maxTemperature: item.main.temp_max,
    };
    forecast.push(forecastItem);
  });

  return forecast;
};

// Convert to Full Weather DTO
export const mapFullWeatherToDTO = (data: {
  weather: TWeather;
  forecast: TForecast[];
}): TFullWeather => {
  // Create Full Weather DTO Object
  const fullWeather: TFullWeather = {
    current: data.weather,
    forecast: data.forecast,
  };

  return fullWeather;
};
