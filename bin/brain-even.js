#!/usr/bin/env node

import readLineSync from 'readline-sync';
import { isEven, getRandomNumber } from '../helpers/helpers.js';
import {
  printGreeting,
  printGameDescription,
  printQuestion,
  printTryAgainMessage,
  printCorrectMessage,
  printCongratsMessage,
} from '../src/index.js';

const evenNumberGame = () => {
  const GAME_CYCLES_TOTAL_NUMBER = 3;

  const userName = printGreeting();
  printGameDescription(
    'Answer "yes" if the number is even, otherwise answer "no"'
  );

  for (let i = 1; i <= GAME_CYCLES_TOTAL_NUMBER; i++) {
    const targetNumber = getRandomNumber(100);

    printQuestion(targetNumber);

    const userAnswer = readLineSync.question('Your answer: ');
    const correctAnswer = isEven(targetNumber) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      printTryAgainMessage(userName, userAnswer, correctAnswer);
      return;
    }

    printCorrectMessage;
  }

  printCongratsMessage(userName);
};

evenNumberGame();
