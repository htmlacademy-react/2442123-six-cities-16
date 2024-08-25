import { Navigate, useParams } from 'react-router-dom';
import { getMockNearOfferCardsById, getMockOfferById } from '../../mocks/offers';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';
import Card from '../../components/card';
import OfferContainer from '../../components/offer-container/offer-container';

function OfferPage (): JSX.Element {
  const {id: offerId} = useParams();
  const nearOfferCards = getMockNearOfferCardsById(offerId);
  const currentOffer = getMockOfferById(offerId);

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

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
        <section className="offer__map map"></section>
      </section>
      <div className=" container">
        <section className="near-places places">
          <h2 className="near-places_title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {nearOfferCards.map ((offerCard) => <Card key={offerCard.id} className="near-places" offerCard={offerCard} />)}
          </div>

        </section>
      </div>
    </main>
  );
}

export default OfferPage;
