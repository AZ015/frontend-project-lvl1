import engine from '../games/engine';
import randomNum from '../src/cli';

const Answers = {
    YES: 'yes',
    NO: 'no'
};

const gameQuestion = console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (num) => {
    return num % 2 === 0 ? Answers.YES : Answers.NO;
};

const isEvenGame = () => {
    const num = randomNum();
    const expectedAnswer = isEven(num);

    return {
        num,
        expectedAnswer
    };
};  



export default () => engine(gameQuestion, isEvenGame);