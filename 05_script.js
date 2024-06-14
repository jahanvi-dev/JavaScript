// Welcome to my JavaScript Notes :

// In this file, we will be studying Conditional Statements :

// If Statement -
let userLoggedIn = false;
if ( userLoggedIn === true){
    console.log('Succesfully logged in.');      // no output, user isn't logged in
}

userLoggedIn = true;
if ( userLoggedIn === true){
    console.log('Succesfully logged in.');      // check console.
}

// If - else, else Statement - 
let age = 16;
if (age >= 18){
    console.log('You are eligible to vote.');
} else if (age < 18){
    console.log('You are not eligible to vote.');      // this would get printed on the console
} else {
    console.log('Please check your data.');
}

age = 18 ;
if (age >= 18){
    console.log('You are eligible to vote.');         // this would get printed on the console
} else if (age < 18){
    console.log('You are not eligible to vote.');      
} else {
    console.log('Please check your data.');
}

age = "m" ;
if (age >= 18){
    console.log('You are eligible to vote.');         
} else if (age < 18){
    console.log('You are not eligible to vote.');      
} else {
    console.log('Please check your data.');            // this would get printed on the console
}


console.log('');
// Switch Statement -
let day = "tuesday";
switch (day){
    case "monday":
        console.log('Monday, work day.');
        break;
    case "tuesday":
        console.log('Tuesday, still a work day.');
        break;
    case "wednesday":
        console.log('Wednesday, work from home day.');
        break;
    case "thursday":
        console.log('Thursday, work from home day.');
        break;
    case "friday":
        console.log('Friday, presentation day.');
        break;
    case "saturday":
        console.log('Saturday, weekend. Happy holidays.');
        break;
    case "sunday":
        console.log('Sunday, weekend. Happy holidays.');
        break;
    default:
        console.log('Something went wrong.')
}