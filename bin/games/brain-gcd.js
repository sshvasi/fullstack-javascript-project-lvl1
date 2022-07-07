#!/usr/bin/env node

import startGameLoop from '../../src/index.js';
import { getRandomNumber, getGcd } from '../../src/helpers.js';

const gcdGame = () => {
  const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

  const generateGameEntry = () => {
    const a = getRandomNumber(0, 10);
    const b = getRandomNumber(0, 10);

    const targetNumbers = `${a} ${b}`;
    const correctAnswer = String(getGcd(a, b));

    return [targetNumbers, correctAnswer];
  };

  startGameLoop(GAME_DESCRIPTION, generateGameEntry);
};

gcdGame();
