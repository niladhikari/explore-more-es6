const instructor = [
    {name : 'Nodi', age : 28, position : 'Serior'},
    {name : 'Akil', age : 26, position : 'Junior'},
    {name : 'Sobuj', age : 30, position : 'Serior'},
]


const Serior = instructor.filter(s => s.position === 'Serior');
const seniorNames = Serior.map(s => s.name);
console.log('The serior instructors name is:',seniorNames);