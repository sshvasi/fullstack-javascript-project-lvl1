import readLineSync from 'readline-sync';

const askUserName = () => {
  const userName = readLineSync.question('May I have your name? ');
  return userName;
};

const sayHello = (name) => {
  console.log(`Hello, ${name}`);
};

const greet = () => {
  const userName = askUserName();
  sayHello(userName);
};

export default greet;
