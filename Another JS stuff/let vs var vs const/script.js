/**
 * Declaring a variable using let:
 *      variables defined with let cannot be Redeclared in the same block.
 *      variables defined with let must be Declared before use.
 *      variables defined with let have Block Scope.
 */

// Redeclaring in the same block scope is not allowed!
/*
let x = 5;
let x = "jonhy";
*/

// But using var allow us to redeclaring!

var x = 5;
var x = 'John';
console.log(x);

/* Block Scope using let */

function declareUsingLet() {
    let y = 5;
    console.log("From inside the block scope: " + y);
}
declareUsingLet();
// console.log("From outside the block scope: " + y);  // i cannot access y: block scope!!
let y = 10;  // But i can to redeclare the variable y outside the block scope
console.log("y = " + y);

function declareUsingVar() {
    var z = 5;
    console.log("After: " + z);
    {
        var z = 10; // no block scope!!
    }
    console.log("Before " + z);
}
declareUsingVar();


/*Another weird stuff */

carName = "Volvo";
var carName;  // it's allowed

/*
carName = "Saab";
let carName = "Volvo";  // NOT allowed
*/

/**
 * 

The const keyword was introduced in ES6 (2015).
    Variables defined with const cannot be Redeclared.
    Variables defined with const cannot be Reassigned.
    Variables defined with const have Block Scope.
*/

const PI = 3.14159265359;
/*
No allowed!
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error 
*/
/* it's not correct

const PI;
PI = 3.14159265359;

*/

/*
When to use JavaScript const?

As a general rule, always declare a variable with const unless you know that the value will change.

Use const when you declare:

    A new Array
    A new Object
    A new Function
    A new RegExp

Because of this you can NOT:

    Reassign a constant value
    Reassign a constant array
    Reassign a constant object

But you CAN:
    Change the elements of constant array
    Change the properties of constant object

*/

// You can create a constant array:

const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
console.log("The constant array is: " + cars);
/*
NOT ALLOWED!

cars = ["Toyota", "Volvo", "Audi"];    // ERROR 
*/

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson"; 

console.log(car);