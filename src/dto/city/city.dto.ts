import {TCity} from './city.dto.types';
import {TCitiesBE} from '../../api';

//Convert to City DTO
export const mapCitiesToDTO = (data: TCitiesBE): TCity[] => {
  let cities: TCity[] = [];

  // Return early if no data is found
  if (!data || !data.data || data.data.length === 0) {
    return cities;
  }

  //TODO: Remove duplicates
  data.data.forEach(country => {
    // Return early if no cities are found
    if (!country.cities || country.cities.length === 0) {
      return;
    }
    // Create City object
    const newCities = country.cities.map(city => ({
      id: city,
      name: city,
    }));

    // Add new cities to the list
    cities = [...cities, ...newCities];
  });

  return cities;
};
