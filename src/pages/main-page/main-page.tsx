import { useSelector } from 'react-redux';
import { selectCity, selectOffers } from '../../store/selectors';
import Card from '../../components/card';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { OfferCardType } from '../../types/offer-type';

const CITIES = ['Paris', 'Amsterdam', 'Berlin', 'Rome', 'Madrid', 'Barcelona'];

function MainPage(): JSX.Element {
  const activeCity = useSelector(selectCity);
  const offers = useSelector(selectOffers);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  const [selectedOffer, setSelectedOffer] = useState<OfferCardType | null>(null);

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
        <CitiesList cities={CITIES} />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            {filteredOffers.length > 0 ? (
              <b className="places__found">
                {filteredOffers.length} places to stay in {activeCity}
              </b>
            ) : (
              <b className="places__found">
                No places to stay available in {activeCity}
              </b>
            )}
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
