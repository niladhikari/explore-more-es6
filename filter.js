// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
// find the numbers gater than 30
const number = [3,5,32,44,67,22,88];
const bigNumbers = number.filter(n => n > 30);
console.log('Numbers gater than 30 is:',bigNumbers);

//find the odd number 
const oddNumbers = number.filter(n => n % 2 == 1);
console.log('Odd numbers:',oddNumbers);

//find the even number lenght friend name
const friends = ['hridoy','rakib','mahbub','imran','anik'];
const evenfriend = friends.filter(name => name.length % 2 == 0);
console.log('Even Lenght Friends:',evenfriend);