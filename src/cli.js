export const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}