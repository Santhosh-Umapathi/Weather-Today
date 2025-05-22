import axios from 'axios';
import {OPEN_WEATHER_URLS} from '../../const';
import {AXIOS_HEADERS} from '../../config';
import {
  TCoordinatesBE,
  TForecastBE,
  TGetCoordinates,
  TGetFullWeather,
  TGetWeather,
  TWeatherBE,
} from './weather.api.types';
import {mapCoordinatesToDTO} from '../../dto';

// City Name to Coordinates
const getCoordinates = async ({city}: TGetCoordinates) => {
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

    // No coordinates found
    if (!results) {
      throw new Error('No coordinates found');
    }

    return results;
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    throw error;
  }
};

// Coordinates to Weather
const getWeather = async ({lat, lon}: TGetWeather) => {
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
const getForecast = async ({lat, lon}: TGetWeather) => {
  try {
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

export const getFullWeather = async ({lat, lon, city}: TGetFullWeather) => {
  try {
    // If city is provided, fetch coordinates first
    if (city) {
      const coordinates = await getCoordinates({city});
      lat = coordinates.lat;
      lon = coordinates.lon;
    }

    // If lat/lon are not provided, throw an error early
    if (!lat || !lon) {
      throw new Error('Latitude and Longitude are required');
    }

    // Fetch weather and forecast concurrently
    const [weather, forecast] = await Promise.all([
      getWeather({lat, lon}),
      getForecast({lat, lon}),
    ]);

    return {weather, forecast};
  } catch (error) {
    console.error('Error fetching full weather:', error);
    throw error;
  }
};
