import { RootState } from './root-reducer';


export const selectCity = (state: RootState) => state.offers.city;
export const selectOffers = (state: RootState) => state.offers.offers;
