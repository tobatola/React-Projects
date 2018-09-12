// Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal:
let spaceship = {}; // spaceship is an empty object

// An object literal with two key-value pairs
let spaceship = {
    'Fuel Type': 'diesel',
    color: 'silver'
  };

// With property dot notation, we write the object's name, followed by the dot operator and then the property name (key):
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};

spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

// You must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. 
// Without bracket notation, code would throw an error.

let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};

spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined
spaceship.numCrew;  // Returns 5

// Create functions to access keys as a variable.  Use the variable inside the brackets to select the keys of an object.

//Creating a Function
let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

//Using a Variable for the Key
let propName =  'Active Mission';

//Using a variable for the Key Value pair
let isActive = spaceship['Active Mission'];

console.log(spaceship[propName]);     //  Returns the spaceship['Active Mission'] value of true
console.log(isActive);               //  Returns the spaceship['Active Mission'] value of true

// If you write returnAnyProp() function with dot notation "returnAnyProp(spaceship.propName);" then 
// the computer would look for a key of 'propName' on our object and not the value of the propName parameter.

//Once we've defined an object, we're not stuck with all the properties we wrote. 
//Objects are mutable meaning can be updated after created!
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
spaceship.color = 'glorious gold';   // Changed the value of an existing property.
spaceship.numEngines = 5;           // Adds a new property to the object.

delete spaceship['Secret Mission'];  // Removes that property from the object.


//When the data stored on an object is a function we call that a method. 
//A property is what an object has, while a method is what an object does.
const alienShip = {
    invade: function () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
  };

//********With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
const alienShip = {
    invade () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
  };

//Object methods are invoked by appending the object's name with the dot operator followed by the method name and parentheses:

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

//Multiple functions in an object still need a comma separator
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let alienShip = {
  retreat () {
  	console.log(retreatMessage);  
  },                                 // Don't forget comma separator
  takeOff () {
  	console.log('Spim...Borp...Glix...Blastoff!');
	}
};

alienship.retreat();     // DONT FORGET to include brackets when calling the property of an object
alienship.takeOff();     // Invokes takeOff property value

//Objects can include properties that have nested properties
let spaceship = {
    passengers: ['Sally', {name: 'Space Dog'}, 'Sandra', 'Paul'], // spaceship.passengers has an element with a property of 'name' within the array.
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    }
  };

       let firstPassenger = spaceship.passengers[1].name;    //Returns: Space Dog
       let firstPassenger = spaceship.passengers[1].name[0];    //Returns: S
       
//Objects can be passed by reference to other objects 
let spaceship = {                      // Creates initial parameters and values for the spaceship object
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};
      
let greenEnergy = obj => {             // Have to create an obj variable that passes the new value to the 'Fuel Type' property of another object
    obj['Fuel Type'] = 'avocado oil'
};
      
let remotelyDisable = obj => {         // Have to create an obj variable that passes the new value to disabled property
  obj.disabled = true	
};

/* THIS WONT WORK TO ADD ELEMENTS TO AN OBJECT VIA A FUNCTION VARIABLE
let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  };

tryReassignment(spaceship);

*/

      greenEnergy(spaceship);
      remotelyDisable(spaceship);
      console.log(spaceship);

//Looping in Object literals using for...in
let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

//for..in results: Lists all crew names and degrees in object as 'Position: Name'
for (let crewMember in spaceship.crew) {
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
  };
  
//for..in results: Lists all crew positions and names in object as 'Position: Name'
for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}')