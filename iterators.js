//Iterators

/*const groceries = ['apple', 'pear', 'cheese', 'bread', 'ham'];
          ^              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      Identifier                      Array 

groceries.forEach(function(groceryItem) { console.log('- '+ groceryItem); });
   ^          ^        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Identifier  Iterator                     Callback Function 
*/





//.reduce()
//returns a single value after iterating through the elements of an array, thereby reducing the array.

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
/*                                    ^               ^
                                  value of [0]      value of [1] then next
                                then adds subseq.   current item in array

*/    return accumulator + currentValue
});

console.log(summedNums) // Output: 17

const newNumbers = [19, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);






//.findIndex()
//returns the index of the first element that evaluates to true in the callback function.
const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex (element => {
 	return	element === 'elephant';
 });

const startsWithS = animals.findIndex (element => {
 	return	element[0] === 's';
 });

console.log(foundAnimal);  // Output: 7
console.log(animals[foundAnimal]);  // Output: elephant
console.log(startsWithS);  // Output: 3
console.log(animals[startsWithS]);  // Output: seal

console.log(lessThanTen); // Output: 3 - the first element in jumbledNums less than 10.
console.log(jumbledNums[3]); // Output: 5 

const greaterThan1000 = jumbledNums.findIndex(num => {
    return num > 1000;
  });
  
console.log(greaterThan1000); // Output: -1 since there is no true element in the array


//.forEach() 
//will execute the same code for each element of an array.
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});








//.map()
// takes an argument of a callback function and returns a new array
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers); // Output: 1, 2, 9, 16, 25







//.filter()
//returns an array of elements after filtering out certain elements from the original array
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

//Creates an array from things that only include the numbers
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers); // Output: 5, 3.14, 100 

//Or
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

//Put numbers below 250 from the randomNumbers array into another array called smallNumbers
const smallNumbers = randomNumbers.filter(function(element) {
    return element<250;
  });

console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

//Puts words longer than 7 chars from favoriteWords array into the longFavoriteWords array
const longFavoriteWords = favoriteWords.filter(function(element){
  return element.length >7;
});

console.log(longFavoriteWords);

//You can call it as another function iteratively
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(listGroceries);



//.some()
//



//.every()
//tests whether all elements in the array pass the test implemented by the provided function


//Remember, functions are available whereever they exist in the code..even after the call code.
function listGroceries(element){
  return ('- ' + element); 
};
/*                  ^
         ****Generic reference for "get item(s) in the array called"*****
*/

//Or you can "pass a callback" as a function within a const
groceries.forEach(groceryItem => console.log(groceryItem));
/* ^          ^        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Identifier  Iterator          Callback Function
*/