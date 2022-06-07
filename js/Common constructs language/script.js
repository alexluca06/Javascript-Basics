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

// This tell you if something is false or true in JS
console.log(Boolean("haha"));

/*
 *  What is true and what is false in JS! 
 */
if(false || null || undefined || "" || 0 || NaN) {
    console.log("This lone won't ever execute!");
}
else {
    console.log("All False!");
}

if("false" && "hello" && true && 1 && -1) {
    console.log("All true!");
}

// Best practice for curly brace {}

function func1()
{
    return // here JS puts automatic a ; and func1 return nothing!
    {
        name:"ALEX"
    };
}

function func2() {
    return {
        name:"ALEX"
    };
}

console.log(func1());
console.log(func2());

// for loop in JS

var sum = 0;
for (var i = 0; i < 10; i++) {
    sum += i;
}
console.log("Sum of 0 through 9 is: " + sum);

// while loop in JS

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

/*
 * Handling Default Values: avoid undefined in function 
 */

function orderChickenWith_v1(sideDish) {
    console.log("V1: Chicken with " + sideDish);
}
orderChickenWith_v1("noodles!");
orderChickenWith_v1();

function orderChickenWith_v2(sideDish) {
    if (sideDish === undefined) {
        sideDish = "whatever!";
    }
    console.log("V2: Chicken with " + sideDish);
}
orderChickenWith_v2("noodles!");
orderChickenWith_v2();

function orderChickenWith_v3(sideDish) {
    /*
     *  When you make || between undefined/empty string and a string 
     *  the result will be the string! 
     */
    sideDish = sideDish || "whatever!";
    console.log("V3: Chicken with " + sideDish);
}
orderChickenWith_v3("noodles");
orderChickenWith_v3();
