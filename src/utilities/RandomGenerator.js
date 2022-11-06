const alphabets = 'qwertyuiopasdfghjklzxcvbnm';

export const RandomGenerator = () => {
    return alphabets[Math.round(Math.random()* alphabets.length)];
}