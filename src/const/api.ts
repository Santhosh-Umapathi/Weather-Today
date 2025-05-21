import {OPENAI_API_KEY} from '../config';

export const CITIES_URL = 'https://countriesnow.space/api/v0.1/countries';

const OPEN_WEATHER_BASE_URL = 'https://api.openweathermap.org';

export const OPEN_WEATHER_URL = `${OPEN_WEATHER_BASE_URL}/data/2.5`;

export const OPEN_WEATHER_URLS = {
  current: `${OPEN_WEATHER_URL}/weather?appid=${OPENAI_API_KEY}&units=metric`,
  forecast: `${OPEN_WEATHER_URL}/forecast?appid=${OPENAI_API_KEY}&units=metric`,
  geo: `${OPEN_WEATHER_BASE_URL}/geo/1.0/direct?appid=${OPENAI_API_KEY}`,
  icon: 'https://openweathermap.org/img/wn',
};
