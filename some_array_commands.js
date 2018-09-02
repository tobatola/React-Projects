const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

let groceries = groceryList.slice (1, 4);

console.log(groceries);
console.log(groceryList.slice(1,4));

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

//MDN array documentation available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array