#!/usr/bin/env node

import startGameLoop from '../../src/index.js';
import { isEven, getRandomNumber } from '../../src/helpers.js';

const evenNumberGame = () => {
  const GAME_DESCRIPTION =
    'Answer "yes" if the number is even, otherwise answer "no".';

  const generateGameEntry = () => {
    const targetNumber = getRandomNumber(100);
    const correctAnswer = isEven(targetNumber) ? 'yes' : 'no';

    return [targetNumber, correctAnswer];
  };

  startGameLoop(GAME_DESCRIPTION, generateGameEntry);
};

evenNumberGame();
