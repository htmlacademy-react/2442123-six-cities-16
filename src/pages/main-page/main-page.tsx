import { useSelector } from 'react-redux';
import { selectCity, selectOffers } from '../../store/selectors';
import Card from '../../components/card';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import SortingOptions, { SortingOption } from '../../components/sorting-options/sorting-options';
import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { OfferCardType } from '../../types/offer-type';

const CITIES = ['Paris', 'Amsterdam', 'Berlin', 'Rome', 'Madrid', 'Barcelona'];

function MainPage(): JSX.Element {
  const activeCity = useSelector(selectCity);
  const offers = useSelector(selectOffers);

  const [selectedOffer, setSelectedOffer] = useState<OfferCardType | null>(null);
  const [activeSorting, setActiveSorting] = useState<SortingOption>('Popular');

  const filteredOffers = useMemo(() => {
    const cityOffers = offers.filter((offer) => offer.city.name === activeCity);

    switch (activeSorting) {
      case 'Price: low to high':
        return cityOffers.sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return cityOffers.sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return cityOffers.sort((a, b) => b.rating - a.rating);
      default:
        return cityOffers;
    }
  }, [offers, activeCity, activeSorting]);

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
            <b className="places__found">{filteredOffers.length} places to stay in {activeCity}</b>
            <SortingOptions activeSorting={activeSorting} onSortingChange={setActiveSorting} />
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
