//using for loop
const num = [1, 3, 5, 7, 9]
let numArray = []
for (let i = 0; i < num.length; i++) {
    const element = num[i]+1;
    numArray.push(element);
}
console.log(numArray);

//using map 
const numbers = num.map(n => n + 1);
console.log(numbers);