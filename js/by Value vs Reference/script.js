/**
 *  Passing by value vs by reference
 *  Objects are passed by reference and primitives by value!
 */

// Primitive: passing by value

console.log("Primitive - passed by value!")

var a = 7;
var b = a;

console.log("a: " + a);
console.log("b: " + b);

b = 5; // just b is change!
console.log("After b update:");
console.log("a: " + a);
console.log("b: " + b);

// Object: passing by reference

console.log("Object - passed by reference!")

var a = { x: 7 };
var b = a;

console.log(a);
console.log(b);

b.x = 5;  // both are change!
console.log("After b update:");
console.log("a: " + a.x);
console.log("b: " + b.x);

/*
 *  Pass by reference vs by value as a function argument
 */

// For primitives:

function changePrimitive(primValue) {
    console.log("in changePrimitive...");
    console.log("before: " + primValue);
    
    primValue = 5;
    console.log("after: " + primValue);
}

var value = 7;
changePrimitive(value);  // is sending by value(a copy), it's doesn't affect!
console.log("after change primitive, origin value = " + value);

// For objects:

function changeObject(objValue) {
    console.log("in changeObject...");
    console.log("before: ");
    console.log(objValue);
    
    objValue.x = 5;
    console.log("after: ");
    console.log(objValue);
}

value = {x: 7};
changeObject(value);  // is sending by reference, it's affect!
console.log("after change Object, origin value = " + value);
