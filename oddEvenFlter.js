const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum = numbers.filter(n => n % 2 ===0);
const oddNum = numbers.filter(n => n % 2 !==0);

console.log('Even Numbers:',evenNum);
console.log('Odd Numbers:',oddNum);
