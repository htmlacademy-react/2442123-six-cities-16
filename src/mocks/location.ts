import { LocationType } from '../types/offer-type';
import { generateRandomFloat } from './utils';

type LocationsByCityType = {
  [index: string]: LocationType;
}
export const getLocationByCity = (cityName: string, isStatic = false): LocationType => {
  const zoom = isStatic ? 13 : 16;

  const locationByCity: LocationsByCityType = {
    Paris: {
      latitude: isStatic ? 48.8566 : generateRandomFloat(48.7, 49, 15),
      longitude: isStatic ? 2.3522 : generateRandomFloat(2.25, 2.5, 15),
      zoom,
    },
    Amsterdam: {
      latitude: isStatic ? 52.3676 : generateRandomFloat(52.3, 52.4, 15),
      longitude: isStatic ? 4.9041 : generateRandomFloat(4.85, 4.95, 15),
      zoom,
    },
    Berlin: {
      latitude: isStatic ? 52.5200 : generateRandomFloat(52.4, 52.6, 15),
      longitude: isStatic ? 13.4050 : generateRandomFloat(13.3, 13.5, 15),
      zoom,
    },
    Rome: {
      latitude: isStatic ? 41.9028 : generateRandomFloat(41.8, 42.0, 15),
      longitude: isStatic ? 12.4964 : generateRandomFloat(12.3, 12.6, 15),
      zoom,
    },
    Madrid: {
      latitude: isStatic ? 40.4168 : generateRandomFloat(40.3, 40.5, 15),
      longitude: isStatic ? -3.7038 : generateRandomFloat(-3.8, -3.6, 15),
      zoom,
    },
    Barcelona: {
      latitude: isStatic ? 41.3851 : generateRandomFloat(41.3, 41.4, 15),
      longitude: isStatic ? 2.1734 : generateRandomFloat(2.1, 2.3, 15),
      zoom,
    },
  };
  return locationByCity[cityName];
};

