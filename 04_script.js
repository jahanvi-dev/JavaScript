// Welcome to Javascript Notes :

// In this file, we will be studying about operators in JavaScript.

// Operators in JS :
// There are five types of operators in JS
console.log('Arithmetic :');
// 👉 Arithmetic :
// 1) Addition (+)
let a = 1;
let b = 2;
console.log(a + b);    // 3

// 2) Subtraction (-)
console.log(b - a);    // 1
 
// Multiplication (*)
console.log(a * b);    // 2

// Division (/)
let x = 25;
let y = 5;
console.log(x / y);     // 5
  
// Power of (**)
console.log(y**2);      // 25

// Modula / Reminder (%)
console.log(x % y);     // 0 (when 5 is divided by 25 remainder is zero.)


console.log('');
console.log('Unary :')
// 👉 Unary :
// 1) Addition (++)
a++                // the value of a was initally 1
console.log(a);     // 2
// To add number above 1, just say a = a+4;
a = a+4; 
console.log(a);      // 6

// 2) Subtraction (--)
x--                  // the value of x was initally 24
console.log(x);     // 24


console.log('');
console.log('Logical AND :');
// 👉 Logical Operators :
// Logical (AND) -
// true && true = true
// true && false = false
// false && true = false
// false && false = false

let msg1 = true;
let msg2 = false;
let msg3 = true;
let msg4 = false;

let result1 = msg1 && msg3;     // true && true
console.log(result1);           // true

let result2 = msg1 && msg2;     // true && false
console.log(result2);           // false

let result3 = msg2 && msg1;     // false && true
console.log(result3);           // false

let result4 = msg2 && msg4;     // false && false
console.log(result4);           // false


console.log('');
console.log('Logical OR :');
// Logical OR (||) - :
// false || false = false
// true  || true = true
// false || true = true
// true || false = true

let result6 = msg2 || msg4;     // false || false
console.log(result6);           // false
 
let result7 = msg1 || msg3;     // true || true
console.log(result7);           // true

let result8 = msg2 || msg3;     // false || true
console.log(result8);           // true

let result9 = msg1 || msg2;     // true || false
console.log(result9);           // true


console.log('');
console.log('Logical NOT :');
// Logical OR (!) - :
// Just opposite of it's true value.
// False would be true & vice-versa.
console.log(true);         // true
console.log(!true);        // false

console.log(false);        // false
console.log(!false);       // true






