import { Link } from 'react-router-dom';
import { OfferCardType } from '../types/offer-type';
import { AppRoute } from '../const';
import FavoriteButton from '../favorite-button/favorite-button';
import { getMarkupRating, upFirstLetter } from '../utils';

type OfferCardProps = {
  className: string;
  offerCard: OfferCardType;
  onHover?: (id: string | null) => void;
  onMouseLeave?: () => void;
};

const FAVORITES_CLASS_NAME = 'favorites';

function Card({offerCard, className, onHover, onMouseLeave}:OfferCardProps):JSX.Element {
  const imgWidth = className === FAVORITES_CLASS_NAME ? 150 : 260;
  const imgHeight = className === FAVORITES_CLASS_NAME ? 110 : 200;
  const cardInfoClassName = className === FAVORITES_CLASS_NAME ? 'favorites_card-info ' : '';

  const {previewImage, price, isFavorite, rating, title, type, id} = offerCard;

  return (
    <article className={`${className}__card place-card`}
      onMouseEnter={() => onHover?.(id)}
      onMouseLeave={() => onMouseLeave?.()}
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer.replace(':id', offerCard.id)}>
          <img className="place-card__image" src={previewImage} width={imgWidth} height={imgHeight} alt="Place image"/>
        </Link>
      </div>
      <div className={`${cardInfoClassName}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton className="place-card" isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getMarkupRating(rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', offerCard.id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{upFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default Card;
