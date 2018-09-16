/*
export default:

As of ES6, JavaScript has implemented a new more readable and flexible syntax for exporting modules. 
These are usually broken down into one of two techniques, default export and named exports.

We'll begin with the first syntax, default export. The default export syntax works similarly to the 
module.exports syntax, allowing us to export one module per file.

Let's look at an example in menu.js.*/

let Menu = {};

export default Menu;

/*
export default uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types.
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
import:

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

/*Named Exports
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
