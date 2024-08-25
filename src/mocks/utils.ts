export const generateRandomBoolean = () => Boolean (Math. round (Math. random())) ;
export const generateRandomInteger = (a: number, b: number) => Math. floor (Math. random () * (b - a + 1) + a) ;
export const generateRandomFloat = (a: number, b: number, precision = 0) =>
  generateRandomInteger(a * (10 ** precision), b * (10 ** precision)) / 10 ** precision;

export const getRandomItem = <T>(items: T[]) => items [generateRandomInteger (0, items. length - 1)];
export const getRandomItems = <T>(items: T[], min = 0) => {
  const randomItems = [];
  let falseCount = items. length - min;

  for (let i = 0; i < items.length; i++) {
    const shouldAddItem = falseCount > 0 ? generateRandomBoolean() : true;
    if (shouldAddItem) {
      randomItems. push (items [i]);
    } else {
      falseCount += 1;
    }
  }
  return randomItems;
};

export const getRandomDate = (minDate: string | number, maxDate: string | number) => {
  const minTimestamp = typeof minDate === 'number' ? minDate : (new Date(minDate)).getTime();
  const maxTimestamp = typeof maxDate === 'number' ? maxDate : (new Date(maxDate)).getTime() ;

  return (new Date(generateRandomInteger (minTimestamp, maxTimestamp))).toISOString();
};
