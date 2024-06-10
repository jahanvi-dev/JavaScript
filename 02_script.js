// Welcome to my JavaScript Notes:

// Data Types in JavaScript --
// JS has variety of data types, which are broadly categorized into two : Primitve Data Type
                                                                     //   Non-primitive/Object Type

// To check data type of variable in JavaScript use typeof();


// Primitive Data Type --
// 1) String :
// Represents sequence of characters, 
// Followed by " double quotes" or 'single quotes'
// Data type of string is (string)

let string = "Hey, I'm a string.";
console.log(string);
console.log(`Data type of string is : ${typeof(string)}.`);

console.log('');
// 2) Number :
// Represents both integer and floating point numbers
// They stand alone. No need for quotes.
// Data type of number is (number)


let integer = 56;
console.log(`I'm an integer ${integer}.`);
console.log(`Data type of integer is : ${typeof(integer)}.`);

let floating = 14.115;
console.log(`I'm a floating number ${floating}.`);
console.log(`Data type of floating number is : ${typeof(floating)}.`)

console.log('');
// 3) Boolean :
// Boolean data type has two value in it either true or false.
// Data type of boolean is boolean 

let female = true;
console.log(female);
console.log(`Data type of boolean is : ${typeof(female)}.`)


console.log('');
// 4) Null :
// Variable where the value has been intentionally kept absent.
// Data type of null should be null, but due to some error or what it shows (object).
let pluto = null;
console.log(pluto);
console.log(`Data type of null is : ${typeof(pluto)}`);


// 5) Undefined :
// Variable which has been declared but not initialized.
// Data type of undefined is undefined.
// Undefined is not an error, but not- defined is.

console.log('');
let moon2;
console.log(moon2);
console.log(`Data type of undefined is : ${typeof(moon2)}`);


console.log('');
// 6) BigInt :
// Represents integers with arbitrary precision.
// Identify it by (n) at the end of number.
// Data type of bigInt is bigInt.

let bigInt = 85674552n;
console.log(bigInt);
console.log(`Data type of bigInt is: ${typeof(bigInt)}`);

console.log('');
// 7) Symbol :
// Every symbol call is guranteed to return a unique Symbol/identifiers.
// Doesn't matter if their data type is same or not.
let symbol1 = ('Same');
let symbol2 = ('Same');
console.log(symbol1 === symbol2);  //true

// Now, see the difference
let symbol3 = Symbol('Same');
let symbol4 = Symbol('Same');
console.log(symbol3 === symbol4);  //false


console.log('');
// Non-Primitive/Object Data type --
// 1) Array :
// Represents a list of elements, you can add as many elements you want of any data type.
// Syntax to remember [], elements are separated by ,
// Data type of array is object.
let sameDataType = [1,2,3,4,5];
console.log(sameDataType);
console.log(`Data type of array is : ${typeof(sameDataType)}.`);
let differentDataType = [1, "Hey", 'True', 586412n];
console.log(differentDataType);


console.log('');
// 2) Object :
// Collection of key-value pairs.
// Syntax to remeber {}, also separated by ,
// Data type of object is object.
let object = {
    name: "Jahanvi",
    age: 21,
    gender: "Female",
    dob: "14/10/2002"
}
console.log(object);
console.log(`Data type of object is : ${typeof(object)}.`);


console.log('');
// 3) Functions :
// A block of code designed to perform a particular task. 
// Data type of function is function.
let firstFunction = () => {
    return "I am a function."
};
console.log(firstFunction());
console.log(`Data type of function is : ${typeof(firstFunction)}.`);


console.log('');
// 4) Date : (an example)
// Shows time & date.
let timeRightNow = new Date();
console.log(timeRightNow);
console.log(`Data type of date is :${typeof(timeRightNow)}.`);




