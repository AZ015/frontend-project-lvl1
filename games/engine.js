import readlineSync from 'readline-sync';

export default (gameQuestion, game) => {
  let tryCount = 3;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);

  while(tryCount > 0) {
    const { question, expectedAnswer } = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question(`Your answer: `);

    if (answer !== expectedAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${expectedAnswer}.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');

    tryCount--;
  }
  console.log(`Congratulations, ${name}!`);
};