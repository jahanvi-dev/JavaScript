// Welcome to my JavaScript Notes :

// The job of a developer is to give instructions to computers, so it is able to perform the tasks that are being assigned to it.

// 👉 What is algorithm??
// The steps defined for solving a problem are collectively called algorithms.
// What language does computer understand??
// Binary language, zeros and ones.


// 👉 JavaScript language
// it is a high-level programming language, abstracts far from zeros & ones.
// source code: the code we write in a specific language.
// machine code: the code that is read & executed by the computer.
// But, source code must be formatted to the code computer can understand to do this, we have compliers & interpreters.
// JavaScript is a interpreted language.


// 👉 COMPLIED                                                
// converts machine code into executable machine code.
// like: C & C++
// for separate system we have separate complier. Linux, windows & macOS all have separate complier.
// program must be recomplied for the execution every time.
// delievers best performance because it isn't converted in runtime.


// 👉 INTERPRETED 
// it is not necessary to compile the source code.
// the source code is not complied in this, rather evaluated by an interpreter.
// program can be executed directly.
// less efficient than complied, but now we have JIT(just in time) compliers used for this context.


// 👉 script tag attributes :
// async = the linked JS files should be downloaded in a  async way, in order not to interrput the download of other files.
// charset = most browsers don't respect this attribute.
// defer = not supported by old browsers, specifies whether to wait to execute the linked JS file, until the webpage content has been completely processed




// How to declare a variable in JavaScript??
// Before 2015 update, people used to declare a variable with (var),
// but, (var) had a lot of it's own issues so a new keyword (let) was introduced.
// For now, just understand using let is good, but if you want you can use (var).

let a; // variable a has been declared.

// How to initialize a variable in JavaScript??
// a = 'YourName';
a = "Jahanvi Yadav.";

// To see the output on console or node.js use console.log();
console.log(a);        // outputs = Jahanvi Yadav



// Various dialog boxes availabe in JavaScript :
// 👉 Alert ---
// Used to interact with users via dialog boxes.
// Displays a message to the user.
// The user can only acknowledge the message, by clicking (okay).


let welcome = alert("Welcome to JavaScript notes by Jahanvi Yadav.");
// copyPaste the above line to see what happens on your webpage. Make sure to comment it out while studying, otherwise you'd be annoyed.

// 👉 Prompt ---
// Just like alert, but like an elder sibling one can say,
// It takes input from the user.
// Displays a message, a text field and ok/cancel buttons.
// If user wants, he/she can submit a response or cancel the request.


let username = prompt("Enter your name:");
if (username === null){
    console.log("Prompt was cancelled by the user.")             // if user cancels, this output gets printed.
} else {
    console.log(`Welcome to our page Mr/Mrs. ${username}!`);    // if user interacts with it, their name would display on the console.
}


// 👉 Confirm ---
// Used to display a message, alongside a ok & cancel button.
// Used for confirming a message by the user. Either ok or cancel.

let confirm_dialogBox = confirm("Would you like to continue with the website?");
if (confirm_dialogBox){
    console.log("Continue with the website.");
} else {
    console.log("Don't want to continue.");
}



// 👉 Variable declaration & initialization via Constant ---
// const is just another way of declaring a variable
// Unlike let, const value cannot be changed once declared.
// When declaring const, name the variable in capitalized form.
const DATEOFBIRTH = "14/10/2002";
console.log(DATEOFBIRTH); 



console.log('');
// 👉 Template Literals :
// Using ` ` (key below esc) instead of " " & ' '. Great for functionality in JS, doing calculations, accessing other variables and etc...
let x = 25;
let y = 50;
console.log(` The sum of x & y is : ${x + y}`);




