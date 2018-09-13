/* 
Classes are a tool that developers use to quickly produce similar objects.
*/

//Creating a normal object:
let halley = {
    _name: 'Halley',
    _behavior: 0,
  
    get name() {
      return this._name;
    },
  
    get behavior() {
      return this._behavior;
    },
  
    incrementBehavior() {
      this._behavior++;
    }
  };

//Instead of creating new dog objects every time, we can use the Dog class..
class Dog {                     //Class names are capitalized (and CamelCased)
    constructor(name) {         //Classes use the constructor method
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  
  const halley = new Dog('Halley');    //Creates a new object in the Dog class with the name 'Halley' and default 0 behavior.
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console

//Class with two parameters..
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);


  

