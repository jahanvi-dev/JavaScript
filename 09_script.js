// Welcome to the JavaScript Notes :

// In this file we will talking about String & Math Methods in JavaScript.

// 👉 String Methods :
// 1) chartAt 
// tells us what letter is on that index
let string = "JavaScript";
console.log(string);
console.log(string.charAt(4));


console.log('');
// 2) Concat 
// Adds two or more variables
let string2 = "Namaste ";
console.log(string2);
console.log(string2.concat(string));


// 3) Method Chaining 
// Joining two or more methods together
console.log(string2.concat(string).toLocaleUpperCase());


console.log('');
// 4) indexOf 
// To find find of anything in the variable
// if not found returns -1
console.log(string2.indexOf('m'));
console.log(string2.indexOf('q'));


console.log('');
// 5) toUpperCase & toLowerCase
console.log(string.toLocaleLowerCase());
console.log(string2.toUpperCase());


console.log('');
// 6) Trim 
// removes extra space from the beginning & end of the string
let trim = '                             Hello  '
console.log(trim)
console.log(trim.trim());


console.log('');
// 7) includes
// to check if the string includes a word
let familyMembers = ['Papa', 'Mummy', 'Goku', 'Bhai', 'Me'];
console.log(familyMembers);
console.log(familyMembers.includes('Papa'));


console.log('');
// 8) repeat
// repeats a word
console.log(string2.repeat(3));


console.log('');
// 9) replace
// replaces a word, wuthout changing the original array
let string3 = "Jhanvi Yadav";
console.log(string3.replace('Jhanvi', 'Jahanvi'));
console.log(string3);


console.log('');
// 10) Slice 
console.log(string3.slice(1,4));


console.log('');
// 11) Split 
console.log(string3.split('', 6));



console.log('');
// 👉 Math methods :
// 1) Math.floor() -
// removes decimal
const b = 5.5;
console.log(Math.floor(b));


console.log('');
// 2) Math random() -
// gives a random number
// 0 - 1
console.log(Math.random());

// 1 - 10
console.log(Math.floor(Math.random()*10));

// 10 - 100
console.log(Math.floor(Math.random()*100));


console.log('');
// 3) Math.abs() -
//  Returns the absolute value of a number.
console.log(Math.abs(-56)); 


console.log('');
// 4) Math.ceil() -
//  Returns the smallest integer greater than or equal to a number.
console.log(Math.ceil(7.1)); 


console.log('');
// 5) Math.max() -
// Returns the largest of zero or more numbers.
console.log(Math.max(1,2,3,4,5,44,7,8,9,10));


console.log('');
// 6) Math.min() -
// Returns the smallest of zero or more numbers.
console.log(Math.min(1,2,3,4,5,44,7,0, 8,9,10));


console.log('');
// 7) Math.pow() -
// Returns base to the power of exponent.
console.log(Math.pow(2,4));


console.log('');
// 8) Math.round() -
console.log(Math.round(4.6));


console.log('');
// 9) Math.sqrt() -
console.log(Math.sqrt(49));


// 👉 Escaping the characters with strings
console.log('');
// 1) for new line = \n
console.log('Good morning, \nThis is to inform all the students that school will remain closed till 05-July-2024.\nThank you.');