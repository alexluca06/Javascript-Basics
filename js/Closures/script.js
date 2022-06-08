/*
*   CLOSURES: briefly, functions which return functions! 
*/
 
function makeMultiplier(multiplier) {
    // this is the closure
    return (function (x) {
        return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2);
/**
 * Even if the makeMultiplier() is done, because it returns another function
 * (it's a closure), the JS engine keep in memory the outer lexical environment and
 * this is how it knows about the value of multiplier!
 */
console.log(doubleAll(10));

// Immediately invoked Function Expression

(function (name) {
    console.log("Hello " + name);
}) ("Alex");