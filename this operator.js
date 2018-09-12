//

const robot = {
    model: 'B-4MI',
    mobile: true,
    greetMaster() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
  
  const massProdRobot = (model, mobile) => {
    return {
      model,
      mobile,
      greetMaster() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
      }
    }
  }
  
  const shinyNewRobot = massProdRobot('TrayHax', true)
  
  const chargingStation = {
    _name: 'Electrons-R-Us',
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],
  
    set robotCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._robotCapacity = newCapacity;
      } else {
        console.log(`Change ${newCapacity} to a number.`)
      }  
    },
    get robotCapacity() {
      return this._robotCapacity;
    }
  }

//Arrow functions inherently bind, or tie, an already defined this value to the function itself 
//that is NOT the calling object. The value of this is the global object, or an object that exists in the global scope, which doesn't have a dietType property and therefore returns undefined.
const goat = {
    dietType: 'herbivore',
    makeSound(){
        console.log('baaa');
    },
    diet: () => {
        console.log(this.dietType)
    }
};

goat.diet(); // Prints undefined since the arrow function limits the 'this.' call to only the diet function.

//Use _ in front of a parameter to indicate it shouldn't be changed (privacy)
const robot = {
    _energyLevel: 100,                       //Indicates this parameter shouldnt be changed
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  robot._energyLevel = 'high';
  
  robot.recharge();  // Returns Recharged! Energy level is currently at high30%. - a mutated value for the parameter