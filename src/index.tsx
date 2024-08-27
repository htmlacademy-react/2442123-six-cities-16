import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/app/app';
import { getMockOfferCards } from './mocks/offers';
import { setOffers } from './store/reducer';

const offerCards = getMockOfferCards();
store.dispatch(setOffers(offerCards));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
