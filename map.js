/*
map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array
*/
const numbers = [4, 5, 2, 8, 10];
// console.log(numbers)
function doubleIt(num) {
    // console.log('num now', num)
    return num * 2;
}

const double2 = n => n * 2;

const result = numbers.map(doubleIt);

// more short cut
const output = numbers.map(n => n * 2);
// console.log(output);

const outputAddTwo = numbers.map(n => n + 2);
// console.log(outputAddTwo);

const outputHalf = numbers.map(n => n / 2);
// console.log(outputHalf);

//find the firends name lenght

const friends = ['hridoy','rakib','mahbub','imran','anik']

const lenght = friends.map(name => name.length);
// console.log('Friends name Lenght:',lenght);

// new only fisrt letter
const firstLetter = friends.map(name => name[0]);
console.log('Friends name First letter:',firstLetter);