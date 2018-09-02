let dayOfWeek = 'Thursday';
dayOfWeek = dayOfWeek.toLowerCase();

const getSleepHours = day => {
  switch(day) {
    case 'monday':
    	return 8
    	break;
    case 'tuesday':
    	return 7
    	break;
    case 'wednesday':
    	return 27
    	break;
    case 'thursday':
    	return 5
    	break;
    case 'friday':
    	return 2
    	break;
    case 'saturday':
    	return 3
    	break;
    default:
    	return 2
    	break;
  }
};

const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + 			getSleepHours('wednesday') + getSleepHours('thursday') + 		getSleepHours('friday') + getSleepHours('saturday') + 		getSleepHours('sunday');

const getIdealSleepHours = idealHours => 
	idealHours * 7;

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  let overUnderSleep = actualSleepHours - idealSleepHours;
  if(actualSleepHours === idealSleepHours){
    console.log(`You got the perfect amount of sleep at ${idealSleepHours} hours!`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${overUnderSleep} hours more sleep than needed!`);
  } else {
    console.log(`You got ${-overUnderSleep} hours less sleep than needed!`);
  }
};

calculateSleepDebt();