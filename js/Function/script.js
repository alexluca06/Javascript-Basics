/*
 *  Functions are First-Class Data Types(same as a variable or object)
 *  They ARE objects!
 */

function multiply(x, y) {
    return x * y;
}

console.log(multiply(5,7));

// Because multiply is a object, we can set properties for functions
multiply.version = "v1.0.0";
console.log(multiply.version);

// Both are the same: output is the code of the multiply func itself
console.log(multiply);
console.log(multiply.toString());

/*
 *  Function factory: create a new function and return it, all inside another func
 */

function makeMultiplier(multiply) {
    var newMult = function (x) {
        return multiply * x; 
    };

    return newMult;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));


var multiplyBy5 = makeMultiplier(5);
console.log(multiplyBy5(10));

/*
 *  Passing functions as arguments 
 */

function doOperationOn(x, operation) {
    return operation(x);  // return a function
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);