import { Helmet } from 'react-helmet-async';
import { OfferCardType } from '../../types/offer-type';
import FavoriteContainer from '../../components/favorite-container/favorite-container';
import FavoriteEmpty from '../../components/favorire-empty/favorite-empty';

type FavoritePageProps = {
  favoriteOfferCards: OfferCardType[];
}

function FavoritesPage({favoriteOfferCards}: FavoritePageProps):JSX.Element {
  return (
    <main className={`page_main page_main--favorites${favoriteOfferCards.length ? '' : ' page_main--favorites-empty'}`}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <div className="page_favorites-container container">
        {favoriteOfferCards.length ? <FavoriteContainer favoriteOfferCards={favoriteOfferCards} /> : <FavoriteEmpty />}
      </div>
    </main>
  );
}

export default FavoritesPage;
