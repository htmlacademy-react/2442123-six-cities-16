import { configureStore } from '@reduxjs/toolkit';
import offersReducer from './reducer';

const store = configureStore({
  reducer: {
    offers: offersReducer,
    // Добавьте другие редьюсеры здесь
  },
});

export default store;
