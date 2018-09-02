const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
  //notice how this creates a new value for the GLOBAL variable stars

  let satellite = 'Pluto';
  //notice how this only changes the value of the LOCAL variable satellite

	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
console.log(satellite);
