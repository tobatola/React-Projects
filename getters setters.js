//Getters amd setters
/*
Getters are methods that get and return the internal properties of an object.

Advantages of using a getter method:
Getters can perform an action on the data when getting a property.
Getters can return different values using conditionals.
EX - Confirming that all data elements exist for a merge.
*/
const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
  
  // To call the getter method: 
  person.fullName; // 'John Doe'



  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if (typeof this._energyLevel === 'number'){
        return `My current energy level is ${this._energyLevel}.`;
      } else {
        return 'System malfunction: cannot retrieve energy level';
      }
    }
  };
  
  console.log(robot.energyLevel);

/*
Setter methods reassign values of existing properties within an object.
Advantages to using setter method:
Setters can check input, performing actions on properties, 
and displaying a clear intention for how the object is supposed to be used.
EX = Setters can perform checks on parameters to ensure they're valid.
*/
const person = {
    _age: 37,
    set age(newAge){
      if (typeof newAge === 'number'){
        this._age = newAge;
      } else {
        console.log('You must assign a number to age');
      }
    }
  };

/*
Setter methods like age do not need to be called with a set of parentheses. 
Syntactically, it is same as reassigning the value of a property.
*/
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age

//Getters can create different derived properties - ex _numOfSensors vs getter of numOfSensors
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){                                  //Getter on Sensors
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return "Sensors are currently down."
      }
    }
};

robot.numOfSensors = 'fifty';
console.log(robot.numOfSensors);     //calls getter - Results: Sensors are currently down.
console.log(robot._numOfSensors);     //calls property - Results: fifty

    

//Getters and Setters can coexist in an object to control changes and derived properties
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){                                  //Getter on Sensors
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return "Sensors are currently down."
      }
    },
  set numOfSensors(num) {                                //Setter on Sensors
    if (typeof num === 'number' && num >=0 ) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
  };
  
  robot.numOfSensors = 100;  
  console.log(robot.numOfSensors);     //calls set property Results: 100

  robot.numOfSensors = 'fifty';  
  console.log(robot.numOfSensors);     //calls set property Results: Pass in a number that is...
  

  