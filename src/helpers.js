const isEven = (number) => number % 2 === 0;

const getRandomNumber = (min = 0, max = 100) => {
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

const isPrime = (n) => {
  if (n % 2 == 0) return n === 2;

  const m = Math.sqrt(n);

  for (let i = 3; i <= m; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

export { isEven, getRandomNumber, getGcd, isPrime };
