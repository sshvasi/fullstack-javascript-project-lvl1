const isEven = (number) => number % 2 === 0;

const getRandomNumber = (min, max) => {
  const randomFloat = min + Math.random() * (max + 1 - min);
  const randomInteger = Math.floor(randomFloat);
  return randomInteger;
};

export { isEven, getRandomNumber };
