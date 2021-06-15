import engine from '../games/engine';
import { generateRandomNum } from '../src/utils';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return findGcd(b, a % b);
  };

const generateGameData = () => {
    const firstOperand = generateRandomNum(1, 100);
    const secondOperand = generateRandomNum(1, 100);
    const question = `${firstOperand} ${secondOperand}`;
    const expectedAnswer = findGcd(firstOperand, secondOperand);

    return {
        question,
        expectedAnswer
    };
};  



export default () => engine(gameQuestion, generateGameData);