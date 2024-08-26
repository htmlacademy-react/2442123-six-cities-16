import { Helmet } from 'react-helmet-async';
import Card from '../../components/card';
import { OfferCardType } from '../../types/offer-type';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Map from '../../components/map/map';

type MainProps = {
  offerCards: OfferCardType[];
};

const CITIES = ['Paris', 'Amsterdam', 'Berlin', 'Rome', 'Madrid', 'Barcelona'];

function MainPage({ offerCards }: MainProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<OfferCardType | null>(null);
  const [activeCity, setActiveCity] = useState<string>('Amsterdam');

  const filteredOffers = offerCards.filter((offer) => offer.city.name === activeCity);

  const handleCardHover = (offerId: string | null) => {
    const currentOffer = filteredOffers.find((offer) => offer.id === offerId) || null;
    setSelectedOffer(currentOffer);
  };

  const city = filteredOffers[0]?.city;

  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((cityName) => (
              <li key={cityName} className="locations__item">
                <Link
                  to={AppRoute.Main}
                  className={`locations__item-link tabs__item${activeCity === cityName ? ' tabs__item--active' : ''}`}
                  onClick={() => setActiveCity(cityName)}
                >
                  <span>{cityName}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{filteredOffers.length} places to stay in {activeCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {filteredOffers.map((offerCard) => (
                <Card
                  key={offerCard.id}
                  className="cities"
                  offerCard={offerCard}
                  onHover={handleCardHover}
                />
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              {city && (
                <Map city={city} offers={filteredOffers} activeOffer={selectedOffer} />
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
