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

//Nested arrays

const nestedArr = [[1], [2, 3]];  //You can mutate an array saved to a variable declared with const but you cannot reassign the variable.

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

//accessing data in a nested array

const numberClusters = [[1,2], [3,4], [5,6]];

const target = numberClusters[2][1]; //note: no brackets used

console.log(target);

//swapping data in an array

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'Program');
console.log(secretMessage);

secretMessage.splice(secretMessage.indexOf('easily'), 1, 'right'); 
//replace "easily" with "right" using arr.splice(find index of easily, remove 1 term, insert "right")

console.log(secretMessage);
//secretMessage: Learning is not about what you get right the first time....

secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(secretMessage.indexOf('get'),5,'know');

//secretMessage: Programming is not about what you know...

console.log(secretMessage.join(' '));
//displays secretMessage as a concatenated sentence with a space between each index value