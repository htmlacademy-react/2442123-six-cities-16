import { UserType } from './user-type';

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type OfferTemplateType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: LocationType;
  };
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type OfferCardType = OfferTemplateType & {
  previewImage: string;
};

export type OfferType = OfferTemplateType & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserType;
  images: string[];
  maxAdults: number;
}
