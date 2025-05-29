import axios from 'axios';
import {CITIES_URL} from '../../const';
import {AXIOS_HEADERS} from '../../config';
import {TCitiesBE} from './city.api.types';
import {mapCitiesToDTO} from '../../dto';
import MOCK_CITIES from './mockResponse.json';

export const getCities = async () => {
  try {
    // const response = await axios.get(CITIES_URL, {
    //   headers: AXIOS_HEADERS,
    // });

    // Convert to Client DTO
    const results = mapCitiesToDTO(MOCK_CITIES as TCitiesBE);

    return results;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};
