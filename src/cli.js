import readlineSync from 'readline-sync';

export const greeting = (username) => {
    console.log(`Hello, ${username}`);
}

export const getUserName = () => {
    return readlineSync.question('May I have your name?  ');
}

