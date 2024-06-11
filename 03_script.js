// Welcome to JavaScript Notes :

// In this file, we will be studying about coverting methods in JavaScript.

console.log('Converting String to Number -')
// A) Converting String to Number -
// 1) By adding, Number in front of variable name.
let example1 = "50";
console.log(example1);
console.log(typeof(example1));
example1 = Number(example1);
console.log(example1);
console.log(typeof(example1));

console.log("");
// 2) By parseInt() function, but this ignores decimal numbers. Suitable for whole numbers.
let example2 = "33";
console.log(example2);
console.log(typeof(example2));
example2 = parseInt(example2);
console.log(example2);
console.log(typeof(example2));

console.log("");
// 3) By parseFloat() function, we can convert decimal numbers as well.
let example3 = "86.456";
console.log(example3);
console.log(typeof(example3));
example3 = parseFloat(example3);
console.log(example3);
console.log(typeof(example3));


console.log('');
// 4) By adding Unary Operator in front of variable.
let example4 = "6";
console.log(example4);
console.log(typeof(example4));
example4 = +example4;
console.log(example4);
console.log(typeof(example4));


console.log('');
console.log('Converting Number to String -');
// B) Converting Number to String -
// 1) By adding, String() function in front of variable name.
let example5 = 45;
console.log(example5);
console.log(typeof(example5));
example5 = String(example5);
console.log(example5);
console.log(typeof(example5));

console.log('');
// 2) By adding, toString() function in front of variable name.
let example6 = 2;
console.log(example6);
console.log(typeof(example6));
example6 = example6.toString();
console.log(example6);
console.log(typeof(example6));

console.log('');
// 3) By using template literals ` `
let example7 = 56;
console.log(example7);
console.log(typeof(example7));
example7 = `${example7}`;
console.log(example7);
console.log(typeof(example7));



