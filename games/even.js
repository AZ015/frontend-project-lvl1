import engine from '../games/engine';
import generateRandomNum from '../src/cli';

const Answer = {
    YES: 'yes',
    NO: 'no'
};

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
    return num % 2 === 0;
};

const generateGameData = () => {
    const question = generateRandomNum(1, 100);
    const expectedAnswer = isEven(num) ? Answer.YES : Answer.NO;

    return {
        question,
        expectedAnswer
    };
};  



export default () => engine(gameQuestion, generateGameData);