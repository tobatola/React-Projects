/*
A factory function is a function that returns an object and can be reused 
to make multiple object instances. 
Factory functions can also have parameters allowing us to customize the object
that gets returned.
*/


/*
monsterFactory function above, it has four parameters and returns 
an object that has the properties: name, age, energySource, and scare(). 
*/
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,                                                     //Keyname: value
      age: age,                                                       //Keyname: value
      energySource: energySource,                                     //Keyname: value
      scare() {console.log(catchPhrase);}                             //Keyname: function
    }
  };

/*
With ES6, it has been made easier by removing dupes when keyname was same as parameter name.
*/
const monsterFactory = (name, age, energySource, catchPhrase) => {    //Parameters
    return { 
      name,                                                           //Keyname
      age,                                                            //Keyname
      energySource,                                                   //Keyname
      scare() {console.log(catchPhrase);}                             //Keyname function
    }
  };

/*
To make an object that represents a specific monster like a ghost, 
call monsterFactory with the necessary arguments and assign the 
return value to a variable:
*/
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'


//Destructured assignment allows extract key-value pairs from objects and save them as properties.
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };

const functionality = robot.functionality       // Assigns robot.functionality key pair to function functionality
//OR use destructured:
const { functionality } = robot;                // Assigns robot.functionality key pair to function functionality
functionality.beep();                           // Returns "Beep Boop"
functionality.energyLevel;                      // Returns Error since functionality only attached to robot.functionality property