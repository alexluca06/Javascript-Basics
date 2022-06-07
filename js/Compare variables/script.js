// Undefined variable
var x;
var y = 0;

function isundefined (x) {
    if(x == undefined) {
        console.log("The variable is undefined!");
    }
    else {
        console.log("The variable is defined!");
    }
}

isundefined(x);
isundefined(y);

// String concatenation

var string = 'Hello';
string += " World";
console.log(string+ "!");

/* 
*   Equality: == ( the type doesn't matter: js will change it
* in the same type for both of them: string or number)
*/
var a = 4, b = 4, c = "4";

function compare(x, y) {
    if(x == y) {
        console.log("x is equal to y");
    }
    else {
        console.log("x is not equal to y");
    }
}
console.log("Compare two numbers: a = 4 and b = 4!");
compare(a, b);
console.log("Compare a number: a = 4 and a string: c = \"4\"");
compare(a, c);

/* 
 *  Strict equality: === ( type matter!!)
*/

function compare(x, y) {
    if(x === y) {
        console.log("x is strict equal to y");
    }
    else {
        console.log("x is not strict equal to y");
    }
}
console.log("Compare two numbers: a = 4 and b = 4!");
compare(a, b);
console.log("Compare a number: a = 4 and a string: c = \"4\"");
compare(a, c);