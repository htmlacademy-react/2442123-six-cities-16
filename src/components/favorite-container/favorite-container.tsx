import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferCardType } from '../../types/offer-type';
import { getOfferCardsByCity } from './utils';
import Card from '../card';

type FavoriteContainerProps = {
  favoriteOfferCards: OfferCardType[];
}
export default function FavoriteContainer ({favoriteOfferCards}: FavoriteContainerProps) {
  const offerCardsByCity = getOfferCardsByCity(favoriteOfferCards);
  return (
    <section className='favorites'>
      <h1 className='favorites_title'>Saved listing</h1>
      <ul className='favorites_list'>
        {Object.entries(offerCardsByCity).map(([cityName, offerCards]) => (
          <li key={cityName} className='favorites__locations-items'>
            <div className='favorites__locations locations locations--current'>
              <div className='locations item'>
                <Link className='locations__item-link' to={AppRoute.Main}>
                  <span>{cityName}</span>
                </Link>
              </div>
            </div>
            <div className='favorites__places'>
              {offerCards.map ((offerCard) => <Card key={offerCard.id} className='favorites' offerCard={offerCard}/>)}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
