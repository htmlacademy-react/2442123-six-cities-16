import { LocationType } from '../types/offer-type';
import { generateRandomFloat } from './utils';

type LocationsByCityType = {
  [index: string]: LocationType;
}
export const getLocationByCity = (cityName: string, isStatic = false): LocationType => {
  const zoom = isStatic ? 13 : 16;

  const locationByCity: LocationsByCityType = {
    Paris: {
      latitude: isStatic ? 48.85661 : generateRandomFloat(48.7, 49, 15),
      longitude: isStatic ? 2.351499 : generateRandomFloat (2.25, 2.5, 15),
      zoom,
    },
    Amsterdam: {
      latitude: isStatic ? 40.85661 : generateRandomFloat(49.8, 50, 15),
      longitude: isStatic ? 2.351499 : generateRandomFloat (2.25, 2.5, 15),
      zoom,
    },
    Berlin: {
      latitude: isStatic ? 41.85661 : generateRandomFloat(48.7, 49, 15),
      longitude: isStatic ? 2.351499 : generateRandomFloat (2.25, 2.5, 15),
      zoom,
    },
    Rome: {
      latitude: isStatic ? 43.85661 : generateRandomFloat(48.7, 49, 15),
      longitude: isStatic ? 2.351499 : generateRandomFloat (2.25, 2.5, 15),
      zoom,
    },
    Madrid: {
      latitude: isStatic ? 42.85661 : generateRandomFloat(28.7, 49, 15),
      longitude: isStatic ? 2.351499 : generateRandomFloat (2.25, 2.5, 15),
      zoom,
    },
    Barcelona: {
      latitude: isStatic ? 60.85661 : generateRandomFloat(34.7, 49, 15),
      longitude: isStatic ? 2.351499 : generateRandomFloat (2.25, 2.5, 15),
      zoom,
    },

  };
  return locationByCity[cityName];
};

