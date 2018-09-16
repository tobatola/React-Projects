/*
WorkAround
WorkAround is a human resources program that returns basic information about an employee, based on salary data. 
Using WorkAround, one can use an employee's salary data to:

return the cadre of the of the employee, in other words, whether this employee is entry level, mid level, or senior level.
calculate employee tax rates
return employee benefits
calculate employee bonuses
calculate the total amount an employee can be reimbursed based on the total value of their health, housing, or wellness benefits

WorkAround currently contains the data and functions in a single file, though they would like to modify the program so it makes 
use of JavaScript modules. Specifically, WorkAround you to demonstrate the different ways to export and import modules.

TASKS:
1. Run the program in employee.js to view the output in the console.
Notice that the getEmployeeInformation() function at the bottom of the file returns the cadre, tax, benefits, bonus, and 
reimbursement eligibility based on a person's payGrade.

2. Let's transform the program using modules.
We'll first segment the program by placing the behavior and data in employee.js, and the use of the data in workAround.js. 
Copy the getEmployeeInformation() function and the three function calls beneath it, and paste the function into the workAround.js 
file. Be sure to remove the copied code from employee.js completely.

Notice that when you run the program, the console returns a ReferenceError that salary is not defined. We'll fix this as we 
build out the program with modules.

3. Let's turn the contents of the information in employee.js into a module. At the top of the file, using let, set the Employee to 
an object that represents the module.
You will not see any output yet.

4. Move the salary property inside the Employee object, keeping the default value of 100000, using the appropriate syntax for defining 
a property and its value.
Recall that we can also set properties inside the object, and it has the same value as if it was declared outside the object as 
Employee.salary.
We'll be declaring salary inside the Employee object in this project.

5. For the rest of the functions in employee.js, define getCadre(), calculateTax(), getBenefits(), calculateBonus(), and 
reimbursementEligibility() as properties on the Employee object. If you are uncertain about the proper syntax for this, check the 
hint.
We do not need to define payGrades as a property of the employee module for this project.
You will not see output yet.

6. In employee.js, within the body of each function, closely check that each property of the Employee object is defined on Employee. 
For example, every instance of salary should be defined as Employee.salary since it is a property of the Employee object.
Note that you will not see output yet.

7. We'll now export the module. In employee.js, at the very bottom of this file, export the module Employee module using the export 
default syntax.

8. In workAround.js, import the Employee module using the import statement. Recall that you will need to import the module using 
the ./employee file path.
Note that you will still see the ReferenceError at this point.

9. In workAround.js in the getEmployeeInformation() function, modify the variables such that they are a property on the Employee 
module.
For example salary should be defined as Employee.salary and calculateTax() should be modified to Employee.calculateTax().
You should see the program's output.

10. Nice job! WorkAround now asks you to demonstrate how to export both traditional variables and variables as aliases.
In order to do this, we'll need to modify each of the functions, so they are no longer properties on the Employee object.
You will not see output at this point.

11. You'll also need to make sure that each mention of a function is no longer a property on the Employee object.
Specifically, getCadre() will no longer be a property of the Employee object.
However, you can leave salary as Employee.salary since it is inside the object.

12. Now, in employee.js, modify the export statement such that you export the variables as the following:
Employee with no alias
getCadre an alias of cadre
calculateTax an alias of tax
getBenefits an alias of benefits
calculateBonus an alias of bonus
reimbursementEligibility an alias of reimbursement

13. In workAround.js, import the following variables.
Employee
cadre
tax
benefits
bonus
reimbursement
When you run the code, you will get a TypeError.

14. In workAround.js in the, getEmployeeInformation() function, modify the function, such that each of the variables is written as its 
alias. For example, Employee.getCadre() will be modified to cadre().
You should see the program's output!

15. Nice work! WorkAround asks you demonstrate one more thing: combine both exporting variables as they are declared and the export 
default statement.
In employee.js use the export keyword to export getCadre(), calculateTax(), getBenefits(), calculateBonus() and 
reimbursementEligibility() as they are declared.
At the bottom of the file, use the export default statement to export the Employee module.

16. In workAround.js:
Write an import statement that imports each of the variables using their variable names.
Beneath this statement, write another import statement that imports the Employee module.
Your code will return a ReferenceError. We'll resolve this in the next step.

17. In a last and final step, in workAround.js, modify the getEmployeeInformation() function, such that it refers to the varables 
that were exported as declared as well as the Employee module.
*/

//EXAMPLE 1 : EXPORTING AN ENTIRE MODULE
//(module.exports Employee -> const Employee = require('./employee.js');)
//In employee.js:
let Employee = {                  //Define the module to be exported -> "Employee"
    salary: 100000
};
  
  
let payGrades = {               //This is Employee data, so it doesn't need to be in the Employee module
    entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, 
    maxSalary: 49999 },
    midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, 
    maxSalary: 99999 },
    seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], 
    minSalary: 100000, maxSalary: 200000 }
};
  
Employee.getCadre = function () {            //Make sure the functions refer to the module so they're exported...
    if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
      return 'entryLevel';
    } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
      return 'midLevel';
    } else return 'seniorLevel';
}
  
Employee.calculateTax = function () {
    return payGrades[Employee.getCadre()].taxMultiplier * Employee.salary;
}
  
Employee.getBenefits = function () {
    return payGrades[Employee.getCadre()].benefits.join(', ');
}
  
Employee.calculateBonus = function () {
    return .02 * Employee.salary;
}
  
Employee.reimbursementEligibility = function () {
    let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    let totalBenefitsValue = 0; 
    let employeeBenefits = payGrades[Employee.getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
      totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
}
  
  export default Employee;


//In workAround.js:
import Employee from './employee.js';     // Import the Employee module

function getEmployeeInformation(inputSalary) {       // Make sure that the function references call the "Employee" module function
  Employee.salary = inputSalary;
  console.log('Cadre: ' + Employee.getCadre());
  console.log('Tax: ' + Employee.calculateTax());
  console.log('Benefits: ' + Employee.getBenefits());
  console.log('Bonus: ' + Employee.calculateBonus());
  console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);

// EXAMPLE 2 : EXPORTING AN INDIVIDUAL VARIABLES (AND ALIASES) FROM A MODULE
// (export {VAR1, ...VARn}; -> import {VAR1, ...VARn} from './employee.js';)
//In employee.js:
let Employee = {
    salary: 100000
  };
  
  
let payGrades = {
    entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
    midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
    seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};
  
function getCadre () {
    if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
      return 'entryLevel';
    } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
      return 'midLevel';
    } else return 'seniorLevel';
}
  
function calculateTax () {
    return payGrades[getCadre()].taxMultiplier * Employee.salary;
}
  
function getBenefits () {
    return payGrades[getCadre()].benefits.join(', ');
}
  
function calculateBonus () {
    return .02 * Employee.salary;
}

function reimbursementEligibility () {
    let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    let totalBenefitsValue = 0; 
    let employeeBenefits = payGrades[getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
      totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
}
  
export {Employee, getCadre as cadre, calculateTax as tax, getBenefits as benefits, calculateBonus as bonus, 
    reimbursementEligibility as reimbursement};

//In workAround.js:
import {Employee, cadre, tax, benefits, bonus, reimbursement} from './employee.js';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + cadre());
  console.log('Tax: ' + tax());
  console.log('Benefits: ' + benefits());
  console.log('Bonus: ' + bonus());
  console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);


//EXAMPLE 3 : EXPORTING VARIABLES AS THEY ARE INDIVIDUALLY DECLARED (i.e. DEFAULT) + 'export default'
//(export default Employee -> import Employee from './employee';)

//In employee.js:
let Employee = {
    salary: 100000
};
  
export let payGrades = {
    entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
    midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
    seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};
  
export function getCadre () {
    if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
      return 'entryLevel';
    } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
      return 'midLevel';
    } else return 'seniorLevel';
}
  
export function calculateTax () {
    return payGrades[getCadre()].taxMultiplier * Employee.salary;
}
  
export function getBenefits () {
    return payGrades[getCadre()].benefits.join(', ');
}
  
export function calculateBonus () {
    return .02 * Employee.salary;
}
  
export function reimbursementEligibility () {
    let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    let totalBenefitsValue = 0; 
    let employeeBenefits = payGrades[getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
      totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
}
  
export {Employee, getCadre as cadre, calculateTax as tax, getBenefits as benefits, calculateBonus as bonus, reimbursementEligibility as reimbursement};
  
export default Employee;


//In workAround.js:
import {getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility} from './employee.js';

import Employee from './employee.js';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);

