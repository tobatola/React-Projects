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
      name: name,
      age: age, 
      energySource: energySource,
      scare() {console.log(catchPhrase);} 
    }
  };

/*
To make an object that represents a specific monster like a ghost, 
call monsterFactory with the necessary arguments and assign the 
return value to a variable:
*/
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'