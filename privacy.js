//Use _ in front of a parameter to indicate it shouldn't be changed (privacy)
const robot = {
  _energyLevel: 100,                       //Indicates this parameter shouldnt be changed
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot.recharge();  // Returns Recharged! Energy level is currently at 130%.