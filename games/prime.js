import engine from '../games/engine';
import { generateRandomNum, ANSWER} from '../src/utils';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => {
    const question = generateRandomNum(1, 100);
    const expectedAnswer = isPrime(question) ? ANSWER.YES : ANSWER.NO;

    return {
        question,
        expectedAnswer
    };
};  



export default () => engine(gameQuestion, generateGameData);