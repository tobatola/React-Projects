/*
When multiple classes share properties or methods, they become candidates for 
inheritance — a tool developers use to decrease the amount of code they need to write.

With inheritance, you can create a parent class (also known as a superclass) with 
properties and methods that multiple child classes (also known as subclasses) share. 
The child classes inherit the properties and methods from their parent class.

*/

class Animal {                       //Parent class that includes shared properties and methods of Cat and Dog
    constructor(name) {
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
      this._behavior++;
    }
  }

 /*
 In the example below, the Cat class extends Animal. As a result, the Cat class has 
 access to the Animal getters and the .incrementBehavior() method.
 */

  class Cat extends Animal {          //Child class that extends Animal parent class with "usesLitter" property
    constructor(name, usesLitter) {
      super(name);                    //calls the name property from the Animal parent class. YOU MUST ALWAYS CALL the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error. 
      this._usesLitter = usesLitter;
    }
//Child classes can contain their own properties, getters, setters, and methods.
    get usesLitter() {
        return this._usesLitter;
      }
    }
  
const bryceCat = new Cat('Bryce', false); 
bryceCat.incrementBehavior();             // Call .incrementBehavior() on bryceCat object instance in Cat class (subclass of Animal) 
console.log(bryceCat._name);              // output: Bryce




//Example from work practice
class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
    
    static generatePassword() {
      return Math.floor(Math.random() *10000);
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);