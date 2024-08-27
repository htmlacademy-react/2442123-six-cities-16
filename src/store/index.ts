import { configureStore } from '@reduxjs/toolkit';
import offersReducer from './reducer'; // Импортируйте ваш редьюсер

const store = configureStore({
  reducer: {
    offers: offersReducer, // Назначьте редьюсер
  },
});

export default store;
