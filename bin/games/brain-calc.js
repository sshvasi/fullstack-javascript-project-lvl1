#!/usr/bin/env node

import { getRandomNumber } from '../../src/helpers.js';
import startGameLoop from '../../src/index.js';

const calcGame = () => {
  const GAME_DESCRIPTION = 'What is the result of the expression?';

  const operations = ['-', '+', '*'];

  const methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  const evaluate = (expression) => {
    const split = expression.split(' ');
    const a = +split[0];
    const op = split[1];
    const b = +split[2];

    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return methods[op](a, b);
  };

  const generateGameEntry = () => {
    const a = getRandomNumber(0, 10);
    const b = getRandomNumber(0, 10);
    const op = operations[getRandomNumber(0, 2)];

    const targetExpression = `${a} ${op} ${b}`;
    const correctAnswer = String(evaluate(targetExpression));

    return [targetExpression, correctAnswer];
  };

  startGameLoop(GAME_DESCRIPTION, generateGameEntry);
};

calcGame();
