const products = {
    data: [
        {id: 1, name: 'lenovo', price: 65000},
        {id: 2, name: 'dell', price: 45000},
        {id: 3, name: 'hp', price: 40000},
        {id: 4, name: 'mac', price: 150000},
    ]
}

// using map for take the name keys value

const names = products.data.map(name => name.name);
// console.log(names);

//// forEach 
// products.data.forEach(p => console.log(p.id))

//using filter find the product gater than 45000 taka
const prices = products.data.filter(name => name.price > 45000);
// console.log(prices);


//using find find the product gater than 45000 taka
const price = products.data.find(name => name.price > 45000);
console.log(price);
