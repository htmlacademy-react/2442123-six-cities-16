import { OfferCardType, OfferType } from '../types/offer-type';
import { generateOffer } from './generate';

type StoredOffersType = {mockOffers: OfferType[]; mockOfferCards: OfferCardType[]}

const MOCK_OFFERS_COUNT = 6;
const FILMS_STORAGE_KEY = 'six-cities-15-films';

const generatedOfferCards: OfferCardType[] = [];
const generatedOffers: OfferType[] = [];

for (let i = 0; i < MOCK_OFFERS_COUNT; i++) {
  const {offer, offerCard} = generateOffer(i);
  generatedOfferCards.push(offerCard);
  generatedOffers.push(offer);
}

const getReadyOffers = () => {
  const storedOffersMap = localStorage.getItem (FILMS_STORAGE_KEY) ;
  if (storedOffersMap) {
    const {mockOffers: storedMockOffers, mockOfferCards: storedMockOfferCards} = JSON.parse(storedOffersMap) as StoredOffersType;
    const wasOffersSaved = storedMockOffers && generatedOffers.length === storedMockOffers.length;
    const wasOfferCardsSaved = storedMockOfferCards && generatedOfferCards.length === storedMockOfferCards.length;

    if (wasOffersSaved && wasOfferCardsSaved) {
      return {mockOffers: storedMockOffers, mockOfferCards: storedMockOfferCards};
    }
  }

  localStorage.setItem (FILMS_STORAGE_KEY, JSON.stringify({mockOffers: generatedOffers, mockOfferCards: generatedOfferCards}));
  return {mockOffers: generatedOffers, mockOfferCards: generatedOfferCards};
};

const {mockOffers, mockOfferCards} = getReadyOffers() as StoredOffersType;

export const reviewsStorageSalt = `some_salt_${MOCK_OFFERS_COUNT}` ;
export const getMockOffers = () => mockOffers;

export const getMockOfferCards = () => mockOfferCards;
export const getMockFavoriteOfferCards = () => mockOfferCards.filter ((offerCard) => offerCard.isFavorite);
export const getMockNearOfferCardsById = (offerId: string | undefined) => mockOfferCards.filter((offer) => offer.id !== offerId).slice(0, 3);
export const getMockOfferById = (offerId: string | undefined) => mockOffers.find ((offer) => offer.id === offerId);
