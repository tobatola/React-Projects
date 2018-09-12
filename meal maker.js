const menu = {
 _courses: {
  _appetizers: [],
  _mains: [],
  _desserts: [],
	set appetizers (appetizer) {
		this._appetizers.push(appetizer);
  },
	set mains (main) {
    this._mains.push(main);
  },
	set desserts (dessert) {
    this._desserts.push(dessert);
  },
  get appetizers() {
	 	return this._appetizers;
  },
	get mains() {
    return this._mains;
 	},
	get desserts() {
    return this._desserts;
  }
 },
  get courses () {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  addToDishCourse (courseName, dishName, dishPrice) {
  	const dish = {
  		name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
 	getRandomDishFromCourse (courseName) {
  	const dishes = this._courses[courseName];
  	const index = Math.floor(Math.random() * dishes.length);
  	return dishes[index];
 	},
  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name} and the price is $${totalPrice}.`;  
  }
}

menu.addToDishCourse('appetizers', 'chips', 3.00);
menu.addToDishCourse('appetizers', 'fried pickles', 5.00);
menu.addToDishCourse('appetizers', 'escargot', 8.00);
menu.addToDishCourse('mains', 'chicken', 11.00);
menu.addToDishCourse('mains', 'steak', 15.00);
menu.addToDishCourse('mains', 'lobster', 25.00);
menu.addToDishCourse('desserts', 'ice cream', 3.00);
menu.addToDishCourse('desserts', 'a sundae', 6.00);
menu.addToDishCourse('desserts', 'a banana split', 9.00);

console.log(menu.generateRandomMeal());
