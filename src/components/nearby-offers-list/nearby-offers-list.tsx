import { OfferCardType } from '../../types/offer-type';
import Card from '../card';

type NearbyOffersListProps = {
  offers: OfferCardType[];
  onHover: (offerId: string | null) => void;
};

function NearbyOffersList({ offers, onHover }: NearbyOffersListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          className="near-places"
          offerCard={offer}
          onHover={() => onHover(offer.id)}
          onMouseLeave={() => onHover(null)}
        />
      ))}
    </div>
  );
}

export default NearbyOffersList;
