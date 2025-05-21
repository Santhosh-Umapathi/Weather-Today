import axios from 'axios';
import {OPEN_WEATHER_URLS} from '../../const';
import {AXIOS_HEADERS} from '../../config';
import {
  TCoordinatesBE,
  TForecastBE,
  TGetCoordinates,
  TGetWeather,
  TWeatherBE,
} from './types';
import {mapCoordinatesToDTO} from '../../dto/weather/weather.dto';

// City Name to Coordinates
export const getCoordinates = async ({city}: TGetCoordinates) => {
  try {
    const response = await axios.get(OPEN_WEATHER_URLS.geo, {
      headers: AXIOS_HEADERS,
      params: {
        q: city,
        limit: 1,
      },
    });

    // Converting Data to ClientDTO
    const results = mapCoordinatesToDTO(response.data as TCoordinatesBE[]);

    return results;
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    throw error;
  }
};

// Coordinates to Weather
export const getWeather = async ({lat, lon, city}: TGetWeather) => {
  // If city is provided, fetch coordinates first
  if (city) {
    const coordinates = await getCoordinates({city});
    lat = coordinates.lat;
    lon = coordinates.lon;
  }

  try {
    const response = await axios.get(OPEN_WEATHER_URLS.current, {
      headers: AXIOS_HEADERS,
      params: {
        lat,
        lon,
      },
    });

    const results = response.data as TWeatherBE;

    return results;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

// Coordinates to Forecast
export const getForecast = async ({lat, lon, city}: TGetWeather) => {
  try {
    // If city is provided, fetch coordinates first
    if (city) {
      const coordinates = await getCoordinates({city});
      lat = coordinates.lat;
      lon = coordinates.lon;
    }

    const response = await axios.get(OPEN_WEATHER_URLS.forecast, {
      headers: AXIOS_HEADERS,
      params: {
        lat,
        lon,
      },
    });

    const results = response.data as TForecastBE;

    return results;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};
