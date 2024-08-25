import { OfferCardType } from '../../types/offer-type';

type OffersByCityType = {
  [key: string]: OfferCardType[];
}
export const getOfferCardsByCity = (offerCards: OfferCardType []) => {
  const cardsByCity: OffersByCityType = {};

  for (const card of offerCards) {
    if (!cardsByCity[card.city.name]) {
      cardsByCity[card.city.name] = [];
    }
    cardsByCity[card.city.name].push(card);
  }
  return cardsByCity;
};
