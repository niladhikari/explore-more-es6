//using for loop
const num = [1, 3, 5, 7, 9]
let numArray = []
for (const element of num) {
    numArray.push(element + 1);
}
console.log(numArray);

//using map 
const numbers = num.map(n => n + 1);
console.log(numbers);