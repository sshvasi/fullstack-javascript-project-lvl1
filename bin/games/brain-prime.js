#!/usr/bin/env node

import startGameLoop from '../../src/index.js';
import { getRandomNumber, isPrime } from '../../src/helpers.js';

const primeGame = () => {
  const GAME_DESCRIPTION =
    'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateGameEntry = () => {
    const targetNumber = getRandomNumber();
    const correctAnswer = isPrime(targetNumber) ? 'yes' : 'no';

    return [targetNumber, correctAnswer];
  };

  startGameLoop(GAME_DESCRIPTION, generateGameEntry);
};

primeGame();
