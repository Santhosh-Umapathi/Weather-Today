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
import {
  mapCoordinatesToDTO,
  mapWeatherToDTO,
  mapForecastToDTO,
  mapFullWeatherToDTO,
} from '../../dto';

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

// Coordinates to Current Weather
const getCurrentWeather = async ({lat, lon}: TGetWeather) => {
  try {
    const response = await axios.get(OPEN_WEATHER_URLS.current, {
      headers: AXIOS_HEADERS,
      params: {
        lat,
        lon,
      },
    });

    const results = mapWeatherToDTO(response.data as TWeatherBE);

    // No weather data found
    if (!results) {
      throw new Error('No weather data found');
    }

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

    const results = mapForecastToDTO(response.data as TForecastBE);

    return results;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};

// Coordinates/City to Weather and Forecast
export const getFullWeather = async ({lat, lon, city}: TGetFullWeather) => {
  console.log('get full weather');
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
      getCurrentWeather({lat, lon}),
      getForecast({lat, lon}),
    ]);

    const results = mapFullWeatherToDTO({
      weather,
      forecast,
    });

    return results;
  } catch (error) {
    console.error('Error fetching full weather:', error);
    throw error;
  }
};
