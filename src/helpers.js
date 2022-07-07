const isEven = (number) => number % 2 === 0;

const getRandomNumber = (min, max) => {
  const randomFloat = min + Math.random() * (max + 1 - min);
  const randomInteger = Math.floor(randomFloat);
  return randomInteger;
};

const getGcd = (x, y) => {
  let a = Math.abs(x);
  let b = Math.abs(y);

  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

export { isEven, getRandomNumber, getGcd };
