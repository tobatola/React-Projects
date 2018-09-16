//Commands Covered:
/*
1. Export Default - exports all the modules in a file to another module/file.
    export default MODULENAME
2. Import - imports objects from another module/file.
    import MODULENAME from './PATH';
3. Named exports - exports specific variables in a module.
    export { VAR1, VAR2 };
4. Named Imports - import specific variables from another module/file.
    import { VAR1, VAR2 } from './PATH';
5. Export Named Exports - export variables as they are created in the code
    export let VAR1 = 'Hi';
    export function FUNCTION1 () {};
6. Import named Imports - import specific variables from another module
    import {VAR1, VAR2, VAR3, VAR4} from './PATH';
7. Export As - export variables with a new variable name attached
    export { VAR1 as VAR98, VAR2 as VAR99, VAR3};
8. Import As - import all variables as a new variable name.
    import * as Carte from './menu'; - if VAR is exported, its the same otherwise called as Carte.PROPERTYNAME


*/



/*
Export Default:

As of ES6, JavaScript has implemented a new more readable and flexible syntax for exporting modules. 
These are usually broken down into one of two techniques, default export and named exports.

We'll begin with the first syntax, default export. The default export syntax works similarly to the 
module.exports syntax, allowing us to export one module per file.

Let's look at an example in menu.js.*/

let Menu = {};

export default Menu;

/*
The export default uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types.
Menu refers to the name of the Menu object, the object that we are setting the properties on within our modules.
When using ES6 syntax, we use export default in place of module.exports.*/

let Airplane = {
    availableAirplanes: [
        {
            name: 'AeroJet',
            fuelCapacity: 800
          },
      {
        name: 'SkyJet',
        fuelCapacity: 500
      }
    ]
  };
  
  export default Airplane;

/*
Import:

ES6 module syntax also introduces the import keyword for importing objects. In our order.js example, 
we import an object like this:*/

import Airplane from './airplane';

/*1. The import keyword begins the statement.
2. The keyword Menu here specifies the name of the variable to store the default export in.
   from specifies where to load the module from.
3. './menu' is the name of the module to load. When dealing with local files, it specifically refers to 
    the name of the file without the extension of the file.

    We can then continue using the Menu module in the order.js file.
*/
//EXAMPLE:

import Airplane from './airplane';

function displayFuelCapacity() {  
  Airplane.availableAirplanes.forEach(function (element) {
		    console.log('Fuel Capacity of '+ element.name + ': ' + element.fuelCapacity);  //
  })
};

displayFuelCapacity()   //  Results "Fuel Capacity of AeroStar: 800" - for each element in the array.

/*
Named Exports:
ES6 introduced a second common approach to export modules. In addition to default export, named exports 
allow us to export data through the use of variables.

Let's see how this works. In menu.js we would be sure to give each piece of data a distinct variable name:*/

let specialty = '';
function isVegetarian() {};

function isLowSodium() {}; 

export { specialty, isVegetarian };

/*
Notice that, when we use named exports, we are not setting the properties on an object. Each export is 
stored in its own variable.
specialty is a string object, while isVegetarian and isLowSodium are objects in the form of functions. 
Recall that in JavaScript, every function is in fact a function object.
export { specialty, isVegetarian }; exports objects by their variable names. Notice the keyword export 
is the prefix.
specialty and isVegetarian are exported, while isLowSodium is not exported, since it is not specified.*/

/*
Named Imports
To import objects stored in a variable, we use the import keyword and include the variables in a set of {}.

In the order.js file, for example, we would write: */

import { specialty, isVegetarian } from './menu';             //Here specialty and isVegetarian are imported.


console.log(specialty);

/*
If we did not want to import either of these variables, we could omit them from the import statement.
We can then use these objects as in within our code. For example, we would use specialty instead of 
Menu.specialty.
*/

/*
EXERCISE:
1. remove any reference to Airplane in our code since we are no longer exporting this module.
For example, Airplane.availableAirplanes should be modified to availableAirplanes.

2. Change the import statement such that it imports the availableAirplanes, flightRequirements, and 
meetsStaffRequirements variables.
Now, modify any instance of the Airplane.availableAirplanes variable, so that you only use availableAirplanes.

3. Define a function displayStaffStatus().

4. Within the body of the displayStaffStatus() function, use the forEach to iterate over the 
availableAirplanes array.
Specifically, the forEach() should take a function as a parameter. The function should in turn take 
element as a parameter.

5. Within the displayStaffStatus() function, use console.log() to output the element's name. We'll add 
more in the next step.

6. Continuing within the displayStaffStatus() function, modify the console.log() statement to output:
(element name) + ' meets staff requirements: ' + (true/false)

To do this, we can call the meetsStaffRequirements method, passing in two parameters element.availableStaff 
and flightRequirements.requiredStaff.

7. Call the displayStaffStatus() function.
*/

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

function displayStaffStatus() {
	availableAirplanes.forEach(function (element) {
		console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
};

displayFuelCapacity();
displayStaffStatus();

/* 
Export Named Exports
Named exports are also distinct in that they can be exported as soon as they are declared, 
by placing the keyword "export" in front of variable declarations.
*/

//In menu.js:


export let specialty = '';
export function isVegetarian() {};

function isLowSodium() {
};

/*
1. The export keyword allows us to export objects upon declaration, as shown in export let specialty and export function isVegetarian() {}.
2. We no longer need an export statement at the bottom of our file, since this behavior is handled above. */

export let availableAirplanes = [
    {
        name: 'AeroJet',
        fuelCapacity: 800,
        availableStaff: ['pilots', 'flightAttendants', 'engineers', 
        'medicalAssistance', 'sensorOperators'],
        maxSpeed: 1200,
        minSpeed: 300
      }, 
      {
        name: 'SkyJet',
        fuelCapacity: 500,
        availableStaff: ['pilots', 'flightAttendants'],
        maxSpeed: 800,
        minSpeed: 200
      }
];
  
export let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
};
  
export function meetsSpeedRangeRequirements (maxSpeed, minSpeed, requiredSpeedRange) {
    let range = maxSpeed - minSpeed;
    if(range > requiredSpeedRange) {
      return true;
    } else {
      return false;
    };
};
  
export function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
      return true;
    } else {
      return false;
    }
};

/* 
Import Named Imports
To import variables that are declared, we simply use the original syntax that describes the variable name. 
In other words, exporting upon declaration does not have an impact on how we import the variables. */

import { specialty, isVegetarian } from 'menu';

//EXAMPLE:

import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

function displayStaffStatus() {
	availableAirplanes.forEach(function (element) {
		console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
}

function displaySpeedRangeStatus() {	  availableAirplanes.forEach(function (element) {
    console.log(element.name + ' meets speed range 			requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();

displayFuelCapacity();
displayStaffStatus();

/* 
Export As
Named exports also conveniently offer a way to change the name of variables when we export or import them. 
We can do this with the as keyword.*/

//Let's see how this works. In our menu.js example:

let specialty = '';
let isVegetarian = function() {
}; 
let isLowSodium = function() {
}; 

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };

/*
In the above example, take a look at the export statement at the bottom of the of the file.

The as keyword allows us to give a variable name an alias as demonstrated in specialty as chefsSpecial 
and isVegetarian as isVeg.Since we did not give isLowSodium an alias, it will maintain its original name.*/

//EXAMPLE: 

let availableAirplanes = [
    {
           name: 'AeroJet',
           fuelCapacity: 800,
           availableStaff: ['pilots', 'flightAttendants', 'engineers', 
           'medicalAssistance', 'sensorOperators'],
           maxSpeed: 1200,
        minSpeed: 300
      }, 
      {
      name: 'SkyJet',
           fuelCapacity: 500,
           availableStaff: ['pilots', 'flightAttendants'],
           maxSpeed: 800,
           minSpeed: 200
      }];
  
  let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
  };
  
  function meetsSpeedRangeRequirements (maxSpeed, minSpeed, requiredSpeedRange) {
    let range = maxSpeed - minSpeed;
    if(range > requiredSpeedRange) {
      return true;
    } else {
      return false;
    };
  };
  
  function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
      return true;
    } else {
      return false;
    }
  };
  
  export {availableAirplanes as aircrafts, flightRequirements as flightReqs, 
    meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};

/* 
Import As
To import named export aliases with the as keyword, we add the aliased variable in our import statement.
*/

import { chefsSpecial, isVeg } from './menu';

/*
In orders.js:
1. We import chefsSpecial and isVeg from the Menu object.
2. Here, note that we have an option to alias an object that was not previously aliased when exported. 
For example, the isLowSodium object that we exported could be aliased with the as keyword when imported: */

import {isLowSodium as saltFree} from 'Menu';

//Another way of using aliases is to import the entire module as an alias:

import * as Carte from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium();

/*
1. This allows us to import an entire module from menu.js as an alias Carte.
2. In this example, whatever name we exported would be available to us as properties of that module. 
For example, if we exported the aliases chefsSpecial and isVeg, these would be available to us. If we did not 
give an alias to isLowSodium, we would call it as defined on the Carte module.
*/

//EXAMPLE: Changing the previous code to use the aliases:
import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

function displayStaffStatus() {
	aircrafts.forEach(function (element) {
        console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, 
            flightReqs.requiredStaff));
  });
}

function displaySpeedRangeStatus() {	  aircrafts.forEach(function (element) {
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, 
        element.minSpeed, flightReqs.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();

/*You can also use named exports and default exports together: 
While it's better to avoid combining two methods of exporting, it is useful on occasion. For example, 
if you suspect developers may only be interested in importing a specific function and won't need to import 
the entire default export.*/
export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
}; 
export let isLowSodium = function() {
}; 
let isGlutenFree = function() {
};

export default isGlutenFree;

