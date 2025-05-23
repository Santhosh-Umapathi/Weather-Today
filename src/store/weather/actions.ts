import {saveData} from '../../storage';
import {TLocations, TSet, TWeatherActions} from './types';

export const actions = (set: TSet) =>
  ({
    setIsLocationEnabled: isLocationEnabled => {
      set(state => ({
        ...state,
        isLocationEnabled,
      }));
    },
    setLocations: location => {
      console.log('setLocations =>', location);

      set(state => {
        const existingLocations = [...state.locations];

        // Set the first location - Primary, Device, Saved
        if (!existingLocations.length) {
          console.log('First location');
          const firstLocation: TLocations = [
            {
              ...location,
              isPrimary: true,
              isSaved: true,
            },
          ];

          saveData('locations', firstLocation);
          return {...state, locations: firstLocation};
        }

        // Update Device Location
        if (location.isDeviceLocation) {
          console.log('Update device location');
          const index = existingLocations.findIndex(
            item => item.isDeviceLocation,
          );
          existingLocations[index] = {...location};

          saveData('locations', existingLocations);
          return {
            ...state,
            locations: existingLocations,
          };
        }

        //Remove location
        if (!location.isSaved) {
          console.log('Remove location');
          const filteredLocations = existingLocations.filter(
            item => item.lat !== location.lat,
          );

          // Update primary if its not last item being removed
          if (filteredLocations.length >= 1) {
            //If a Primary location is removed, update to 1st location as primary
            const isPrimaryExist = filteredLocations.find(
              item => item.isPrimary,
            );
            if (!isPrimaryExist) {
              filteredLocations[0] = {...filteredLocations[0], isPrimary: true};
            }
          }

          saveData('locations', filteredLocations);

          return {
            ...state,
            locations: filteredLocations,
          };
        }

        // Add location
        if (location.isSaved) {
          console.log('Add new location');
          const addedLocations = [...existingLocations, location];
          saveData('locations', addedLocations);
          return {
            ...state,
            locations: addedLocations,
          };
        }

        // Set Primary location
        if (location.isPrimary) {
          console.log('Set Primary location');

          //Remove Previous Primary
          const previousIndex = existingLocations.findIndex(
            item => item.isPrimary,
          );
          existingLocations[previousIndex] = {
            ...existingLocations[previousIndex],
            isPrimary: false,
          };

          // Update new Primary
          const newIndex = existingLocations.findIndex(
            item => item.lat === location.lat,
          );
          existingLocations[newIndex] = {
            ...existingLocations[newIndex],
            isPrimary: true,
          };

          saveData('locations', existingLocations);
          return {
            ...state,
            locations: existingLocations,
          };
        }

        return {
          ...state,
          locations: existingLocations,
        };
      });
    },
    setSavedSearches: searchText => {
      set(state => ({
        ...state,
        savedSearches: [],
      }));
    },
  } as TWeatherActions);
