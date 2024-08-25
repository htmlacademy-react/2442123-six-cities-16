export const getMarkupRating = (rating: number) => {
  const ratingInPercents = `${(Math.floor(rating) / 5) * 100}%`;
  return {width: ratingInPercents};
};


export const upFirstLetter = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

