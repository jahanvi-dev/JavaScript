// Welcome to JavaScript Notes - 

// In this file we will be studying about functions in JS -

// In JS, a function is defined using function keyword.
// Anonymous function = function without a name.
// Named function = function with a name.

// 👉 1) Function Statement -
// A reusable code block
// Function works only when it is called.
function hello(){
    console.log("I am a function.");
}
hello();   // this is calling a function


console.log('');
// 👉 2) Function Expression - 
// When you save function in a variable is it called : Function expression.
// It is best pratice to use return keyword instead of console();
let firstFunction = function(){
    return 'I am a function expression.'
}
console.log(firstFunction());


console.log('');
// 👉 3) IIFE : Immediately Invoked Function -
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
// 👉 4) Fat Arrow Function - 
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


// function with multiple parameters
console.log('');
let someFunc = (a,b,c) => {
    console.log(a,b,c);
}

someFunc('Good', 'Morning', 'Gals,');



console.log('');
// 👉 Try & Catch :
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
console.log(' Value of THIS in JS -');
// THIS - CALL - APPLY - BIND
// 👉 THIS :
// 1) value of this in global scope is = window
console.log(this);


console.log('');
// 2) value of this in function scope = window
let thisFunction = () => {
    console.log(this);
}
thisFunction();


console.log('');
// 3) value of this in method = object
// What is a method? Passing a function as value in objects.
// object banao, uski key decide kro, key ki value me function pass krdo.
let thisObject = {
    name: "Jahanvi",
    age: () =>{
        return this;
    }
}

console.log(thisObject);
console.log(thisObject.age());


console.log('');
// 4) value of this in function, inside ES5 Method = window
// make a method, aur usme function pass krdo
let es5_function = {
    name: "Rahul",
    age: function (){
    function childFunction(){
        console.log(this);
    }
    childFunction();

    }
}
// console.log(es5_function);
es5_function.age();


console.log('');
// 5) value of this in function, inside ES6 Method = object
let es6_function = {
    name: "Jahanvi",
    age: function(){
    let childFunction = () => {
        console.log(this);
    } 
    childFunction();
    }
}

es6_function.age();


console.log('');
// 6) value of this in constructor function = new blank object
// what is a constructor function? when we add new before calling a function it is called a constructor function and
function cons(){
    console.log(this);
}

// cons()          = window
// new cons();     = new blank object


// 7) value of this in event listener = element jispe listener laga ho


console.log(' Value of CALL in JS -');
// call - apply - bind 
// they are almost same : these are just ways in which a function is called, by assuming a object as this
// 👉 CALL :
let cricket = {
    playerName: 'Virat'
};

let callFunction = function(){
    console.log(this)
}

// console.log(callFunction());    //  = window
callFunction.call(cricket);
callFunction.call(55);


console.log('');
console.log('Value of APPLY in JS -');
// 👉 APPLY :
// same like call, it just takes parameters & their value is passed in array
let applyFunction = function(a, b,c){
    console.log(this, a, b, c);
}
applyFunction.apply(cricket, ['Indian', 'cricket', 'player']);


console.log('');
console.log('Value of BIND in JS -');
// 👉 BIND :
// exact as call, but bind doesn't run a function, 
// it returns a function, which you can run later when you want.
let bindFunction = function(){
    console.log(this);
}

// save calling a function in variable
let bindCalling = bindFunction.bind('Bind Calling');
bindCalling();


console.log('');
// 👉 Let's talk about Higher Order Functions :
// take one or multiple function as arguments 
// returns an function ex- forEach 
// either takes a  function in parameter

// function high(a){

// }
// high(function(){

// })

// or  returns a function
// function(){
//     return function(){

//     }
// }
function laugh(func, times){
    for(let i=0; i <= times; i++){
        func();
    }
}

let laughs = function(){
    console.log('You are so funny');
}

laugh(laughs,3);
 

// 👉 Scope in JS -
// SCOPE IN JS - tells accessibilty of variables, objects and functions in the code.
// function - block - lexical - global

// FUNCTION : when a variable is defined under function in js. It has its values only inside that function and can be called inside only. And we can make other variable with same name o/s the function.
// not accessible o/s of function

// GLOBAL : variable declared o/s of functions. And it cannot be repeated in the entire code.
// if some var is not defined in function but is defined in global that can be used in function scope.
// when FUNCTION vs GLOBAL scope is function scope always wins.
 
// BLOCK SCOPE : var declared {} inside curly braces cannot be accessed outside {} curly braces.
// applies on let & const. After, 2015. Best example : LOOPS

// LEXICAL SCOPE : variables defined in outer function are accessible in the inside function. But var defined outside a function is not accessible.

