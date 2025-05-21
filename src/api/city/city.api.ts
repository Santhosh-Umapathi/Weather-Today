import axios from 'axios';
import {CITIES_URL} from '../const';

export const getCities = async () => {
  try {
    const response = await axios.get(CITIES_URL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};
