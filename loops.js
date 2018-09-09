for (let i = 5; i < 11; i++) {     //sets counter to increase by 1 from 5 to 10
    console.log(i);                //displays counts for each i (5-10)
  }

  for (let i = 3; i >=0; i--){     //sets counter to decrease by 1 from 3 to 0
    console.log(i)                 //displays counts for each i (3-0)
  };

  //A Nested FOR loop
  const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

//While loop

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = "?";

console.log(currentCard);

while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};

//Using the Break keyword in a loop
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i])
  if (rapperArray[i] ===  'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.")

//BRANCHING THE File

//ASDFASDFASDFASDFASDFASDFASDF//asdfasdfasdfasdfaertwerwert