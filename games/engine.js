import readlineSync from 'readline-sync';

const TRY_COUNT = 3;

const checkAnswer = (userAnswer, expectedAnswer) => {
  return userAnswer === expectedAnswer;
}

const engine = (gameQuestion, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);

  for (let i = 0; i < TRY_COUNT; i++) {
    const { question, expectedAnswer } = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question(`Your answer: `);

    if (!checkAnswer(answer, expectedAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${expectedAnswer}.\net's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;