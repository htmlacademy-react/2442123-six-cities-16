import { Review } from '../types/review-type';
import { generateReview } from './generate';
import { getMockOffers, reviewsStorageSalt } from './offers';
import { generateRandomBoolean, generateRandomInteger } from './utils';

type ReviewsStoreType = {[key: string]: Review[] | string};

const REVIEWS_STORAGE_KEY = 'six-cities-15-reviews';

const mockOffers = getMockOffers();
const generatedReviewsStore: ReviewsStoreType = {salt: reviewsStorageSalt};
let indexAddition = 0;

for (const offer of mockOffers) {
  generatedReviewsStore[offer.id] = [];
  const randomReviewsCount = generateRandomBoolean() ? generateRandomInteger(0, 15) : generateRandomInteger (0, 2);
  for (let i = 0; i < randomReviewsCount; i++) {
    (generatedReviewsStore[offer.id] as Review[]).push(generateReview(i + indexAddition));
  }
  (generatedReviewsStore[offer.id] as Review[]).sort((a: Review, b: Review) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime());
  indexAddition += randomReviewsCount;
}

const getStoredReviews = () => {
  const storedReviewsMap = localStorage.getItem(REVIEWS_STORAGE_KEY);
  if (storedReviewsMap) {
    const reviewsStore = JSON.parse(storedReviewsMap) as ReviewsStoreType;
    const wasReviewsSaved = reviewsStore.salt === reviewsStorageSalt;
    if (wasReviewsSaved) {
      return reviewsStore;
    }
  }
  localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(generatedReviewsStore)) ;
  return generatedReviewsStore;
};
const storedReviews = getStoredReviews () ;
export const getMockReviewsByOfferId = (offerId: string | undefined) => offerId ? storedReviews[offerId] as Review[] : [] as Review[];
