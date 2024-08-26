import { getLocationByCity } from './location';
import { templateAvatars, templateCities, templateDesctiptions, templateGoods, templateHostNames, templateOfferImages, templatePreviews, templateReviews, templateTitles, templateTypes } from './templates';
import { generateRandomBoolean, generateRandomFloat, generateRandomInteger, getRandomDate, getRandomItem, getRandomItems } from './utils';

const IS_STATIC_LOCATION = true;

export const generateOffer = (index:number) => {
  const offerCityName = templateCities[1];
  const offerTemplate = {
    id: `id_${index}`,
    title: getRandomItem(templateTitles),
    type: getRandomItem (templateTypes),
    price: generateRandomBoolean() ? generateRandomInteger (100, 1000) : generateRandomInteger (100, 10000),
    city: {
      name: offerCityName,
      location: getLocationByCity(offerCityName , IS_STATIC_LOCATION)
    },
    location: getLocationByCity(offerCityName),
    isFavorite: generateRandomBoolean(),
    isPremium: generateRandomBoolean(),
    rating: generateRandomFloat (1, 5, 1),
  };

  const offerCard = {
    ...offerTemplate,
    previewImage: getRandomItem(templatePreviews),
  };
  const offer = {
    ...offerTemplate,
    description: getRandomItem(templateDesctiptions),
    bedrooms: generateRandomBoolean() ? generateRandomInteger (1, 2) : generateRandomInteger (1, 6),
    goods: getRandomItems (templateGoods),
    host: {
      name: getRandomItem (templateHostNames),
      avatarUrl: getRandomItem(templateAvatars),
      isPro: generateRandomBoolean(),
    },
    images: getRandomItems (templateOfferImages, 6),
    maxAdults: generateRandomBoolean() ? generateRandomInteger (1, 3) : generateRandomInteger (1, 8),
  };

  return {offerCard, offer};
};

export const generateReview = (index: number) => {
  const review = {
    id: `review_id_${index}`,
    date: getRandomDate('2019-05-08T14:13:56.569Z', '2025-11-22T23:25:47.893Z'),
    user: {
      name: getRandomItem(templateHostNames),
      avatarUrl: getRandomItem(templateAvatars),
      isPro: generateRandomBoolean(),
    },
    comment: getRandomItem(templateReviews) ,
    rating: generateRandomInteger(1, 5),
  };
  return review;
};
