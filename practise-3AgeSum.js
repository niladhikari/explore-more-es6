const people = [
    {name : 'Nodi', age : 20},
    {name : 'Akil', age : 15},
    {name : 'Sobuj', age : 22},
]

// using for of loop
let ageTotal = 0;
for (const ageSum of people) {
    ageTotal = ageTotal + ageSum.age
}
console.log('The age sum is:',ageTotal);


//using reduce
const ageSum = people.reduce((p,c) => p + c.age , 0)
console.log('The age sum is:',ageSum);