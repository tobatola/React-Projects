//Built in Object methods

//Create object of robot with parameters (key value pairs).
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

//.keys grabs the property names, otherwise known as keys, and save the keys in an array which is assigned to robotKeys
const robotKeys = Object.keys(robot);   

console.log(robotKeys);                   //Returns: 'model', 'mobile, 'sentient', etc.


//.entries will also return an array, but the array will contain more arrays that have both the key and value of the properties in an object.
const robotEntries = Object.entries(robot); 

console.log(robotEntries);               //Returns: ['model', 'SAL-1000'], ['mobile', true], etc.   


//.assign assigns another object that has the properties of robot but with a few additional properties. 
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);               //Returns: laserBlaster: true, voiceRecognition: true, model: 'SAL-1000', mobile: true, etc.