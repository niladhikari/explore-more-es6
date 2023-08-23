// it work like filter but it only return one value

const number = [3,5,32,44,67,22,88];
const bigNumbers = number.find(n => n > 30);
console.log('Number gater than 30 is:',bigNumbers);