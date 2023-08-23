/*
map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array
*/
const numbers = [4, 5, 2, 8, 10];

function doubleIt(num) {
    // console.log('num now', num)
    return num * 2;
}

const double2 = n => n * 2;

const result = numbers.map(doubleIt);

// more short cut
const output = numbers.map(n => n * 2);
console.log(output);