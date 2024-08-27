// rootReducer.ts
import { combineReducers } from 'redux';
import offersReducer from './reducer';

const rootReducer = combineReducers({
  offers: offersReducer,
  // Добавьте другие редьюсеры здесь
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
