/**
 * Function Constructors, prototype and 'this' keyword
 */

function test () {
    console.log(this);
}

test();
console.log(window);  // windows == this
window.name = "Alex";
console.log(window.name);
this.anotherName = "Luca";
console.log(this.anotherName);

// Function constructors: we cannot have 'return' in these func

function Circle (radius) {
    // A property
    this.radius = radius;
    
    // A method: in this way, will be created a new one for every new object!
    //-> prototypes are the solution!
    this.getArea = 
        function () {
            return Math.PI * Math.pow(this.radius,2);
        };

}
//Prototype: This will be declare and assign once
//It NEED to stay OUTSIDE of constructor
Circle.prototype.getAreaV2 = 
    function () {
        return Math.PI * Math.pow(this.radius,2);
    }

var myCicle = new Circle(10);
console.log(myCicle);
console.log(myCicle.radius);
console.log("Area using method declared inside constructor: " + myCicle.getArea());
console.log("Area using prototype: " + myCicle.getAreaV2());

