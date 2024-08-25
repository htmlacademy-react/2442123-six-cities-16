import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../mocks/auth-status';
import { getMockReviewsByOfferId } from '../../mocks/reviews';
import { Review } from '../../types/review-type';
import ReviewForm from '../reviews-form/reviews-form';
import ReviewItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  offerId: string | undefined;
}

const sortOffersByDate = (a: Review, b: Review) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime ();

export default function ReviewsList({offerId}: ReviewsListProps) {
  const authorizationStatus = getAuthorizationStatus();
  const offerReviews = getMockReviewsByOfferId(offerId) .sort(sortOffersByDate) ;
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>
      <ul className="reviews__list">
        {offerReviews.map ((review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth ? <ReviewForm /> : null}
    </section>
  );
}
