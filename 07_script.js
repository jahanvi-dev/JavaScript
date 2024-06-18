// Welcome to JavaScript Notes - 

// In this file we will be studying about functions in JS -

// 1) Function Statement -
// A reusable code block
// Function works only when it is called. 
function hello(){
    console.log("I am a function.");
}
hello();


console.log('');
// 2) Function Expression - 
// When you save function in a variable is it called : Function expression.
// It is best pratice to use return keyword instead of console();
let firstFunction = function(){
    return 'I am a function expression.'
}
console.log(firstFunction());


console.log('');
// 3) IIFE : Immediately Invoked Function -
// just add () around the function, to make it IIFE
// We'll see this under two circumstances - anonymous function & function expression
(function message(){
    console.log('Text me when you land. Safe Journey.');
})();

let sum = function (a,b){
    return a + b;
}(5,8);

console.log(sum);


console.log('');
// 4) Fat Arrow Function - 
// Introduced in ECMAScript 2015
let multiply = (a,b) => {
    return a * b;
};

console.log(multiply(8,9));

console.log('');
// Function that welcome people, by their name
let user = function(input){
    if(input === ''){
        console.log('');
    }
    else (
        console.log(`Welcome to our website Mr/Mrs. ${input}`)
    )
}

// console.log(user(prompt('Enter your name :')));


console.log('');
// Try & Catch :
// If the variable is found, run try statement, if not run catch statement.
let first = "I am try";
try{
    console.log(first);
} catch {
    cosnole.log('first is not defined.')
}

try{
    console.log(second);
} catch {
    console.log('I am catch.')
}


console.log('');
// setTimeout function -
// Prints output after specified seconds
