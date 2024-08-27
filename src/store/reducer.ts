import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferCardType } from '../types/offer-type';

interface OffersState {
  city: string;
  offers: OfferCardType[];
}

const initialState: OffersState = {
  city: 'Berlin',
  offers: [],
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setOffers(state, action: PayloadAction<OfferCardType[]>) {
      state.offers = action.payload;
    },
  },
});

export const { setCity, setOffers } = offersSlice.actions;
export default offersSlice.reducer;
