const number = [33, 50, 79, 78, 90, 101, 30];

const tenDivNumbers = number.filter(n => n % 10 == 0 );
console.log('The Numbers Is:',tenDivNumbers);

const tenDivNumber = number.find(n => n % 10 == 0 );
console.log('The Numbers Is:',tenDivNumber);