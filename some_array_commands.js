//MDN array documentation available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//Manipulating an array

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


//manipulating an array thorugh a function call

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement (newArr) {
  newArr.pop();
}

removeElement(concept);
console.log(concept);

