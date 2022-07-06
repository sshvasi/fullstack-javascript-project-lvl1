#!/usr/bin/env node

import readLineSync from 'readline-sync';

const AVAILABLE_ANSWERS = ['yes', 'no'];
const GAME_CYCLES_TOTAL_NUMBER = 3;

const isEven = (number) => number % 2 === 0;

const getRandomNumber = () => Math.floor(Math.random() * 100);

const printProblemDescription = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
};

const printQuestion = (number) => {
  console.log(`Question: ${number}`);
};

const printTryAgainMessage = (userName) => {
  console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
  console.log(`Let's try again, ${userName}!`);
};

const printCorrectMessage = () => {
  console.log('Correct!');
};

const printCongratsMessage = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const evenGame = () => {
  let correctAnswersCounter = 0;

  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  printProblemDescription();

  for (let i = 1; i <= GAME_CYCLES_TOTAL_NUMBER; i++) {
    const targetNumber = getRandomNumber();
    printQuestion(targetNumber);
    const correctAnswer = isEven(targetNumber) ? 'yes' : 'no';
    const userAnswer = readLineSync.question('Your answer: ');

    if (!AVAILABLE_ANSWERS.includes(userAnswer)) {
      printTryAgainMessage();
      return;
    }

    if (userAnswer !== correctAnswer) {
      printTryAgainMessage();
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

evenGame();
