import readLineSync from 'readline-sync';

const printGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const printGameDescription = (description) => {
  console.log(description);
};

const printQuestion = (content) => {
  console.log(`Question: ${content}`);
};

const printTryAgainMessage = (name, userAnswer, correctAnswer) => {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
  );
  console.log(`Let's try again, ${name}!`);
};

const printCorrectMessage = () => {
  console.log('Correct!');
};

const printCongratsMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export {
  printGreeting,
  printGameDescription,
  printQuestion,
  printTryAgainMessage,
  printCorrectMessage,
  printCongratsMessage,
};
