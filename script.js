// Welcome to my JavaScript Notes :

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
// Alert ---
// Used to interact with users via dialog boxes.
// Displays a message to the user.
// The user can only acknowledge the message, by clicking (okay).


let welcome = alert("Welcome to JavaScript notes by Jahanvi Yadav.");
// copyPaste the above line to see what happens on your webpage. Make sure to comment it out while studying, otherwise you'd be annoyed.

// Prompt ---
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


// Confirm ---
// Used to display a message, alongside a ok & cancel button.
// Used for confirming a message by the user. Either ok or cancel.

let confirm_dialogBox = confirm("Would you like to continue with the website?");
if (confirm_dialogBox){
    console.log("Continue with the website.");
} else {
    console.log("Don't want to continue.");
}



// Variable declaration & initialization via Constant ---
// const is just another way of declaring a variable
// Unlike let, const value cannot be changed once declared.
// When declaring const, name the variable in capitalized form.
const DATEOFBIRTH = "14/10/2002";
console.log(DATEOFBIRTH); 


