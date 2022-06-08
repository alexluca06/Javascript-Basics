/*
    The Outer Environment is GLOBAL SCOPE!
*/
var message = "in global";  // NO TYPE - dynamically type at RUNTIME
console.log("This is: " + message);

var A = function () {
    var message = 'inside A function';
    console.log("This is(A func): " + message);
    B();
    /*
        The Outer Environment of the func C is FUNC A!
    */
    var C = function () {
        console.log("This is(C func): " + message);       
    }
    C();
}

/*
    The Outer Environment of the func B is GLOBAL SCOPE!
*/
function B() {
    console.log("This is(B func): " + message);
}

A();

/*
    Reuse the same variable with different type!
*/
message = 10;
console.log(message);

function sum(message) {
    return message + 10;
}

var amount = sum(message);
console.log(amount);