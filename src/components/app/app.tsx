import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../../pages/not-found/not-found';
import { getMockFavoriteOfferCards } from '../../mocks/offers';
import Layout from '../layout/layout';
import { getAuthorizationStatus } from '../../mocks/auth-status';
import { HelmetProvider } from 'react-helmet-async';

export default function App(): JSX.Element {
  const favoriteOfferCards = getMockFavoriteOfferCards();
  const authorizationStatus = getAuthorizationStatus();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Layout favoritesCount={favoriteOfferCards.length} />}
          >
            <Route
              index
              element={<MainPage />}
            />
            <Route
              path={AppRoute.Login}
              element={(
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <LoginPage />
                </PrivateRoute>
              )}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage favoriteOfferCards={favoriteOfferCards}/>
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPage/>}
            />
            <Route
              path={'*'}
              element={<NotFound/>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

