import engine from './engine';
import { generateRandomNum, ANSWER } from '../src/utils';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateGameData = () => {
  const question = generateRandomNum(1, 100);
  const expectedAnswer = isEven(question) ? ANSWER.YES : ANSWER.NO;

  return {
    question,
    expectedAnswer,
  };
};

export default () => engine(gameQuestion, generateGameData);
