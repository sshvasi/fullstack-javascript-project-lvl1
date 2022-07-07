#!/usr/bin/env node

import startGameLoop from '../../src/index.js';
import { getRandomNumber } from '../../src/helpers.js';

const progressionGame = () => {
  const GAME_DESCRIPTION = 'What number is missing in the progression?';

  const getProgression = (start, step, length) => {
    let progression = [];

    for (let i = 0; i < length; i++) {
      progression = [...progression, start + step * i];
    }

    return progression;
  };

  const generateGameEntry = () => {
    const length = 10;
    const start = getRandomNumber();
    const step = getRandomNumber(1, 5);

    const progression = getProgression(start, step, length);
    const missingElIndex = getRandomNumber(0, -1);

    const correctAnswer = String(progression.splice(missingElIndex, 1, '..'));
    const progressionWithMissingEl = progression.join(' ');

    return [progressionWithMissingEl, correctAnswer];
  };

  startGameLoop(GAME_DESCRIPTION, generateGameEntry);
};

progressionGame();
