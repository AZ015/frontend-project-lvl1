import engine from '../games/engine';
import { generateRandomNum } from '../src/cli';

const PROGRESSION_LENGTH = 10;

const gameQuestion = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  let progression = [];
  for (let i = 0; i < length; i++) {
    progression = [...progression, start + step * i];
  }

  return progression;
};

const generateGameData = () => {
  const start = generateRandomNum(1, 100);
  const step = generateRandomNum(3, 7);
  const hiddenElementIndex = generateRandomNum(1, PROGRESSION_LENGTH - 1);
  const progression = generateProgression(start, step, PROGRESSION_LENGTH);
  const expectedAnswer = `${progression.splice(hiddenElementIndex, 1, '..')}`;
  const question = progression.join(' ');

    return {
        question,
        expectedAnswer
    };
};  



export default () => engine(gameQuestion, generateGameData);