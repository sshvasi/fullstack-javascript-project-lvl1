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

const AVAILABLE_ANSWERS = ['yes', 'no'];
const GAME_CYCLES_TOTAL_NUMBER = 3;

const evenNumberGame = () => {
  let correctAnswersCounter = 0;

  const userName = printGreeting();
  printGameDescription(
    'Answer "yes" if the number is even, otherwise answer "no"'
  );

  for (let i = 1; i <= GAME_CYCLES_TOTAL_NUMBER; i++) {
    const targetNumber = getRandomNumber(100);
    printQuestion(targetNumber);
    const correctAnswer = isEven(targetNumber) ? 'yes' : 'no';
    const userAnswer = readLineSync.question('Your answer: ');

    if (!AVAILABLE_ANSWERS.includes(userAnswer)) {
      printTryAgainMessage();
      return;
    }

    if (userAnswer !== correctAnswer) {
      printTryAgainMessage(userName, userAnswer, correctAnswer);
      return;
    }

    if (userAnswer === correctAnswer) {
      printCorrectMessage();
      correctAnswersCounter += 1;
    }
  }

  if (correctAnswersCounter === GAME_CYCLES_TOTAL_NUMBER) {
    printCongratsMessage(userName);
  }
};

evenNumberGame();
