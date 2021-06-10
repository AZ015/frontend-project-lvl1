import engine from '../games/engine';
import { generateRandomNum } from '../src/cli';

const OPERATOR = {
    PLUS: '+',
    MINUS: '-',
    MULTIPLY: '*',
    DIVIDE: '/',
}

const getRandomOperator = () => {
    const keys = Object.keys(OPERATOR);
    return OPERATOR[keys[keys.length * Math.random() << 0]];
};

const calculate = (a, b, operator) => {
    switch (operator) {
      case OPERATOR.PLUS:
        return a + b;
      case OPERATOR.MINUS:
        return a - b;
      case OPERATOR.MULTIPLY:
        return a * b;
      case OPERATOR.DIVIDE:
        return a / b;
      default:
        throw new Error(`Operator '${operator}' is not supported`);
    }
  };

const gameQuestion = 'What is the result of the expression?';

const generateGameData = () => {
    const firstSummand = generateRandomNum(1, 100);
    const secondSummand = generateRandomNum(1, 100);
    const operator = getRandomOperator();
    const question = `${firstSummand} ${operator} ${secondSummand}`;
    const expectedAnswer = calculate(firstSummand, secondSummand, operator);

    return {
        question,
        expectedAnswer
    };
};

export default () => engine(gameQuestion, generateGameData);