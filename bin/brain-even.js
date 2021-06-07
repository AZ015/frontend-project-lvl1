import readlineSync from 'readline-sync';

const Answers = {
    YES: 'yes',
    NO: 'no'
};

const TRY_COUNT = 3;

export const checkIsEven = (username) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    for (let i = 0; i < TRY_COUNT; i++) {
        const num = randomNum();
        console.log(`Question: ${num}`);
        const answer = readlineSync.question('Your answer: ');
        const expectedAnswer = isEven(num);

        if(checkAnswer(answer, expectedAnswer)) {
            correctAnswer();
        } else {
            wrongAnswer(answer, expectedAnswer, username);
            return;
        }    
    }    

    console.log(`Congratulations, ${username}!`);  
}

const randomNum = (max = 100) => {
    return Math.floor(Math.random() * max);
}

const isEven = (num) => {
    return num % 2 === 0 ? Answers.YES : Answers.NO;
}

const checkAnswer = (userAnswer, expectedAnswer) => {
    return userAnswer === expectedAnswer;
}

const correctAnswer = () => {
    console.log('Correct!');
}

const wrongAnswer = (actual, expected, username) => {
    console.log(`'${actual}' is wrong answer ;(. Correct answer was '${expected}'.\nLet's try again, ${username}!`);
}
