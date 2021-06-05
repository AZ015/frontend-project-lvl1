import readlineSync from 'readline-sync';

export function greeting() {
    const name = readlineSync.question('May I have your name?  ');
    console.log(`Hello, ${name}`);
}

