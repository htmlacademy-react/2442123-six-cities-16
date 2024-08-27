// actions.ts
import { createAction } from '@reduxjs/toolkit';
import { OfferCardType } from '../types/offer-type';

// Определение типов действий
export const setCity = createAction<string>('offers/setCity');
export const setOffers = createAction<OfferCardType[]>('offers/setOffers');
