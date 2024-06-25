// Welcome to JavaScript Notes 

// In this file, we will be studying some advance topics in JS -


// Browser provides three things : window object, stack & heap memory.
// 👉 VAR
// - was part of ES5
// - adds itself to the window object which exposes the memory and hence, isn't considered a good way of declaring variables.
// - it is global & function scope. Can be accessed through out a function.
// - var can be accessed in the entire parent function.


// 👉 LET & CONST :
// - was introduced in ES6
// - let variable whose value can be changed, we can re-assign the value in let.
// - const variable whose value cannot be changed. If you try to change it's value it will an error.
// - doesn't add itself to the window object and maintains privacy. Hence, considered a better option.
// - it is block scope. Cannot be accessed through out a function.


// 👉 UNDEFINED VS NOT DEFINED :
// undefined - variable has been declared but value hasn't been assigned. Exists in the code.
// not-defined - variable has not been declared. Doesn't exists in the code.
let e;
console.log(e); // returns undefined. Declared but value hasn't been assigned.
// console.log(v); // throws error, v not defined


// 1) Prototypal Inheritance 
// remember new creates a blank object
// A function that uses this, and is creating new objects via 
// (new) keyword such function is called constructor function.
function human (name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}

// Prototypal Inheritance
human.prototype.nationality = 'Indian';

let human1 = new human('Jahanvi', 21, 'Female');
console.log(human1);

let human2 = new human('Rahul', 28, 'Male');
console.log(human2);


console.log('');
// 2) Closures in JS
// A function that returns an function, and uses parent function ka koi variable is called closures.
function add(){
    let a = 0;
    return function(){
        a++;
        console.log(a);
    }
}

let addValue = add();
addValue();
addValue();


console.log('');
console.log('Table of 4 via closures :')
function multiply(){
    let a = 4;
    return function(x){
        console.log(a*x);
    }
}

let multiplyValue = multiply();
multiplyValue(1);
multiplyValue(2);
multiplyValue(3);
multiplyValue(4);
multiplyValue(5);
multiplyValue(6);
multiplyValue(7);
multiplyValue(8);
multiplyValue(9);
multiplyValue(10);



// 👉 3) Spread Operator :
// copy reference values :
// - it consists of three dots & the gets copied into wherever you want like:
// - it spreads the array to individual elements in the new array.
let notice = ['We wish you good luck'];
let studentMsg = ['Congrats! Tomorrow is your first class', ...notice];
console.log(studentMsg);


// 👉 REST PARAMETER :
// - what if you have two parameters but you've sent multiple arguments? Obvious it is that, it will ignore other arguments.
// - In such cases, rest parameter comes in handy.
let poem = ( a,b, ...c) => {
    console.log( a, b, c);
}
poem('Twinkle', 'twinkle', 'little', 'star', 'how', 'i', 'wonder');
// - first parameter will work fine, but from third onwards it turns into array


console.log('');
// 👉 Local Storage :
// allows us to store data in key/value pairs in the browser.
// it stores data with no expiration date.
// data isn't deleted when you leave the tab or refresh, it is saved for future purposes.

// How to set item, in local storage -
// localStorage.setItem(' ', ' ', ' ')
localStorage.setItem('Name', 'Jahanvi');
localStorage.setItem('Age', 21); 

// How to get item, in local storage -
// localStorage.getItem(' ', ' ', ' ')  
// If the dosen't exist it returns null
// Otherwise, it returns the value  
console.log(localStorage.getItem('DOB'));    


// How to remove item, in local storage -
// localStorage.removeItem(' ', ' ', ' ')
localStorage.removeItem('Age');

// 💡Local storage can only store strings, so if we want to store a more complex data 
// like arrays or objects etc... we need to convert the, into string using JSON.stringfy

// 👉 JSON :
// JSON is also done majorly in .stringify() & .parse()
// json.stringify() = converts JS object or array into JSON string


 
// json.parse() = converts JSON string into a JS object or array
