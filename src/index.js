import readLineSync from 'readline-sync';

const startGameLoop = (gameDescription, generateGameEntry) => {
  const GAME_CYCLES_NUMBER = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);
  console.log(gameDescription);

  for (let i = 0; i < GAME_CYCLES_NUMBER; i += 1) {
    const [question, correctAnswer] = generateGameEntry();

    console.log(`Question: ${question}`);

    const userAnswer = readLineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGameLoop;
