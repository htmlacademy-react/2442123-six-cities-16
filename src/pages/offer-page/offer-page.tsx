import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getMockNearOfferCardsById, getMockOfferById } from '../../mocks/offers';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';
import OfferContainer from '../../components/offer-container/offer-container';
import Map from '../../components/map/map';
import NearbyOffersList from '../../components/nearby-offers-list/nearby-offers-list';

function OfferPage (): JSX.Element {
  const { id: offerId } = useParams();
  const nearOfferCards = getMockNearOfferCardsById(offerId);
  const currentOffer = getMockOfferById(offerId);

  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

  const city = currentOffer.city;

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <section className="offer">
        <div className="offer gallery-container container">
          <div className="offer__gallery">
            {currentOffer.images.map((image) => (
              <div key={image} className="offer__image-wrapper">
                <img className="offer__image" src={image} alt="Photo studio" />
              </div>
            ))}
          </div>
        </div>
        <OfferContainer offer={currentOffer} />
        <section className="offer__map map">
          <Map city={city} offers={nearOfferCards} activeOffer={nearOfferCards.find((offer) => offer.id === hoveredOfferId) || null} />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places_title">Other places in the neighbourhood</h2>
          <NearbyOffersList
            offers={nearOfferCards}
            onHover={setHoveredOfferId} // Передаем функцию для обновления состояния
          />
        </section>
      </div>
    </main>
  );
}

export default OfferPage;
