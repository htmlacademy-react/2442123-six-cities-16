import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { getMockOfferCards } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offerCards = getMockOfferCards ();

root.render(
  <React.StrictMode>
    <App offerCards = {offerCards}/>
  </React.StrictMode>
);
