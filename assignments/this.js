/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding means that computer will think that "this", which refers to something , is the actual window/console object. In other words if I write "console.log(this)", it will return all the values of my window.

* 2. Implicit Binding means that the object in which "this" is referring to is the actual object that is before the dot symbol. The 'this' will only be understood when the function is invoked 

* 3. New Binding means that the "this" is the value of the object created by a constructor function

* 4. Explicit Binding means that the 'this' will be the value of an object when we use the medthods 'apply' or 'call' when invoking a function. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myPet (petName){
    console.log(this);
    return petName;
}

myPet('coco');

// Principle 2

// code example for Implicit Binding

let person ={
    name: 'Emma',
    age:'30',
    favorite_color: function() {
        console.log(this.age);
    }

}
    person.favorite_color();


// Principle 3

// code example for New Binding


function Sports(ski) {
    this.thing = ski;
}

let mySports = new Sports('I like to ski');
console.log(mySports.thing);




// Principle 4

// code example for Explicit Binding

function fruits() {
    console.log(this.name);
}

let myfavorite_fruit={
    name: 'apple',
    color: 'green'

}

fruits.call(myfavorite_fruit);
function fruits() {
    console.log(this.name);
}