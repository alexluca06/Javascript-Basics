/*
 *  Arrays: -> the elements of an array doesn't need to be the same type!
 * They are just objects in java script!
 */

var array = new Array();
array[0] = "Alex";
array[1] = 23;
array[2] = function (name) {
    console.log("Hello " + name );
};

array[3] = {course: "Web Development"};

console.log(array);
console.log(array[0]);
console.log(array[3]);
array[2] (array[0]);

// Short hand array creation

var names = ["Alex", "Joe", "Mike"];
console.log(names);

names[100] = "Jim";
// No error when we try to access names[4..99], just undefined for name
for(var i = 0; i < names.length; i++) {
    array[2] (names[i]);
}

// A fancy for loop using for literal objects(at arrays will be a little tricky)

var myObj = {
    name: "Alex",
    course: "Web dev",
    platform: "Coursera"
};

for (var prop in myObj) {
    console.log(prop + ": " + myObj[prop]);
}


var names2 = ["Alex", "Joe", "Mike"];

for (var n in names2) {
    console.log("Hello " + names[n]);
}

names2.greeting = "Hi!";  // this is the trick!

for (var n in names2) {
    console.log("Hello " + names[n]);
}



