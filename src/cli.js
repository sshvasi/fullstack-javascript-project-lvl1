import readLineSync from 'readline-sync';

const greet = () => {
  const userName = askUserName();
  sayHello(userName);
};

const askUserName = () => {
  const userName = readLineSync.question('May I have your name? ');
  return userName;
};

const sayHello = (name) => {
  console.log(`Hello, ${name}`);
};

export { greet };
