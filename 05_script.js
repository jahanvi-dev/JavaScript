// Welcome to my JavaScript Notes :

// In this file, we will be studying Conditional Statements :

// 👉 If Statement -
// Perform a certain action, only when a certain condition is met.
if (true){
    console.log('Hey from if(true).');

}

let userLoggedIn = false;
if ( userLoggedIn === true){
    console.log('Succesfully logged in.');      // no output, user isn't logged in
}

userLoggedIn = true;
if ( userLoggedIn === true){
    console.log('Succesfully logged in.');      // check console.
}


console.log('');
// 👉 If - else, else Statement - 
if (false){
    console.log('will not get print.');
} else if (true) {
    console.log('Hey from else if(true).')
}
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
// 👉 Switch Statement -
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


console.log('');
// praticing some normal questions, for syntax
// 👉 check if the user if logged in
// access the button.
let loginButton = document.getElementById('userLogin');
let user = false;
loginButton.addEventListener('click', function(){
    if(user === true){
        console.log('User is logged in.');
        loginButton.textContent = "Welcome";
        loginButton.style.backgroundColor = "green";
    } else {
        console.log('User is not logged in.');
        loginButton.textContent = " Error";
        loginButton.style.backgroundColor = "red";
    }

});
  

// 👉 QUES - Student score 90+ (Grade: A+)
//                score 80  (Grade: A )
//                score 60  (Grade: B )
//                score 59-33 (Grade: C)
//                score 32  (Grade: F )
let score = 35;
if (score >= 90){
    console.log('Your grade is A+');
} else if ( score >= 80 ){
    console.log('Your grade is A');
} else if ( score >= 60){
    console.log('Your grade is B');
} else if ( score >= 33){
    console.log('Your grade is C');
}else if (score < 33){
    console.log('Your grade is F');
} else {
    console.log('Error');
}


console.log('');
// 👉 Truthy & Falsy Statements :
//  FALSY - 0, NaN, false, undefined, null & document.all
//  TRUTHY - anything that dosen't fit into falsy, falls into Truthy.

// 1) Zero :
if (0){
    console.log('Not shown');
} else {
    console.log('0 gets printed.')
}


// 2) NaN :
if (NaN){
    console.log('Not shown');
} else {
    console.log('NaN gets printed.')
}


// 3) null :
if (null){
    console.log('Not shown');
} else {
    console.log('null gets printed.')
}


// 4) undefined :
if (undefined){
    console.log('Not shown');
} else {
    console.log('undefined  gets printed.')
}


// 5) document.all :
if (document.all){
    console.log('Not shown');
} else {
    console.log('document.all gets printed.')
}


console.log('');
// 👉 Ternary Operator :
let ageOfPerson = 19;
ageOfPerson >= 18 ? console.log('vote') : console.log('cannot vote');

let week = 'weekends';
week ==='weekends' ? console.log('It is weekend time.') : console.log('Weekdays it is.') 

