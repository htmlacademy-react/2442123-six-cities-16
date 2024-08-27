import { LocationType } from '../types/offer-type';
import { generateRandomFloat } from './utils';

type LocationsByCityType = {
  [index: string]: LocationType;
};

const locationByCity: LocationsByCityType = {
  Paris: {
    latitude: 48.8566,
    longitude: 2.3522,
    zoom: 13,
  },
  Amsterdam: {
    latitude: 52.3676,
    longitude: 4.9041,
    zoom: 13,
  },
  Berlin: {
    latitude: 52.5200,
    longitude: 13.4050,
    zoom: 13,
  },
  Rome: {
    latitude: 41.9028,
    longitude: 12.4964,
    zoom: 13,
  },
  Madrid: {
    latitude: 40.4168,
    longitude: -3.7038,
    zoom: 13,
  },
  Barcelona: {
    latitude: 41.3851,
    longitude: 2.1734,
    zoom: 13,
  },
};

export const getLocationByCity = (cityName: string, isStatic = false): LocationType => {
  const baseLocation = locationByCity[cityName];

  if (!baseLocation) {
    throw new Error(`Location for city "${cityName}" not found.`);
  }

  if (isStatic) {
    return baseLocation;
  }

  return {
    ...baseLocation,
    latitude: generateRandomFloat(baseLocation.latitude - 0.1, baseLocation.latitude + 0.1, 15),
    longitude: generateRandomFloat(baseLocation.longitude - 0.1, baseLocation.longitude + 0.1, 15),
    zoom: 16,
  };
};
