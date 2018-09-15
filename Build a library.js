/*
Books-'N-Stuff carries three different types of media: books, CDs, and movies. 
In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. 
These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), 
and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), 
and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings 
(array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

If you're looking for a challenge, try to create the four classes without using the steps below.
*/

/*
1. Let's start by making a parent class for our Book, CD, and Movie classes.
Create an empty class called Media.

2. Inside the Media class, create an empty constructor() method that takes one parameter.
This argument will set the one property that is in all three subclasses of Media, and does 
not have a default value.

3. Inside the constructor, set the values for Media properties that Book, CD, and Movie share. 
Prepend all of the property names with an underscore (_).

4. Create getters for the title, isCheckedOut, and ratings properties. Each getter should return 
the value saved to the matching property.

5. Create a setter for the isCheckedOut property.

6. Under your getters, create a method named toggleCheckOutStatus that changes the value saved to 
the _isCheckedOut property.
If the value is true, then change it to false. If the value is false, then change it to true.

7. Under .toggleCheckOutStatus(), create a method named getAverageRating. 
Return the average value of the ratings array.
Use the reduce method to find the sum of the ratings array. Divide this sum by the length of the ratings 
array, and return the result.

Take a look at the hint if you need help with the syntax for finding the sum of the ratings array.

8. Let's add a method named addRating that accepts one argument and uses .push() to add it to the end 
of the ratings array.

9. Next, we''ll build a Book class that extends Media. If you feel comfortable building the Book class 
on your own, give it a shot. If not, use the steps below to help you along the way.

Whether you want to follow the steps or not, use the list of properties, getters, and methods as a reference.

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), 
and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Create an empty Book class that extends Media.

10. Inside the Book class, create a constructor that accepts three arguments. These arguments are used to set 
properties that do not have default values.

11. Call super on the first line of the Books's constructor method. Pass it any arguments that the parent 
constructor uses.

12. Use the remaining arguments to set the author and pages properties in Book.

13. Since our Book class inherits Media's properties and getters, we only need to create two new getters in the 
Book class.
Add two new getters to the Book class. Each getter should return the value saved to its matching property.

14. Let's see if you can create an entire Movie class using only the property, getter, and method specifications below:

Movie
properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
getters: all properties have a getter
methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Take a look at the Hint to see step-by-step instructions.

15. Create a Book instance with the following properties:
Author: 'Bill Bryson'
Title: 'A Short History of Nearly Everything'
pages: 544
Save the instance to a constant variable named historyOfEverything.

16. Call .toggleCheckOutStatus() on the historyOfEverything instance.

17. Log the value saved to the isCheckedOut property in the historyOfEverything instance.

18. Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.

19. Call .getAverageRating() on historyOfEverything. Log the result to the console.

20. Create a Movie instance with the following properties:
Director: 'Jan de Bont'
Title: 'Speed'
Runtime: 116
Save the instance to a constant variable named speed.

21. Call .toggleCheckOutStatus() on the speed instance.

22. Log the value saved to the isCheckedOut property in the speed instance.

23. Call .addRating() three times on speed with inputs of 1, 1, and 5.

24. Call .getAverageRating() on speed. Log the result to the console.

25. Nice work! If you've made it this far, you clearly have a strong understanding of class syntax and inheritance.

OPT: Some avenues to build on your existing progress:

Add more properties to each class (movieCast, songTitles, etc.)
Create a CD class that extends Media.
In .addRating(), make sure input is between 1 and 5.
Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
Create class called Catalog that holds all of the Media items in our library.
*/

class Media {
    constructor(title) {
      this._title = title;
          this._ratings = [];
          this._isCheckedOut = true;
    }

    get title() {
        return this._title;
    }
    get ratings() {
        return this._ratings;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    
    set isCheckedOut(checkedOut) {
        this._isCheckedOut.push(checkedOut);
    }  

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let ratingsSum = 
        this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        const lengthOfArray = this.ratings.length;
        return (ratingsSum/lengthOfArray);
    }

    addRating(rating) {
        if (rating >=1 && rating <=5) {
            this.ratings.push(rating);  
        } else {
            console.log("Please enter a value between 1 and 5.");
        }        
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}


class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
    this._runTime = runTime;
    }

    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}


class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
}

const historyOfEverything = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544);

console.log(historyOfEverything);
/* Results: 
Book {
    _title: 'A Short History of Nearly Everything',
    _ratings: [],
    _isCheckedOut: true,
    _author: 'Bill Bryson',
    _pages: 544 }*/

console.log(historyOfEverything.isCheckedOut);     // Results: true


historyOfEverything.toggleCheckOutStatus();        // Changes checkout status from T/F
historyOfEverything.addRating(5);                  // Adds a Rating of 5 to that Book
historyOfEverything.addRating(2);                  // Adds a Rating of 2 to that Book
historyOfEverything.addRating(7);                  // Results: "Please enter a value between 1 and 5."

console.log(historyOfEverything.isCheckedOut);     // Results: false

console.log(historyOfEverything.getAverageRating());   // Results: 4.6666
console.log(historyOfEverything);
/* New Results:
Book {
    _title: 'A Short History of Nearly Everything',
    _ratings: [ 5, 2 ],
    _isCheckedOut: false,
    _author: 'Bill Bryson',
    _pages: 544 } */

const speed = new Movie ('Jan De Bont', 'speed', 116);