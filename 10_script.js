// Welcome to JavaScript Notes :

// In this file, we will be studying about objects in JavaScript

// Object Syntax -
let js = {
    name: 'JavaScript',
    version: 'ES6',
    author: 'Brendan Eich'
}
console.log(js);

// Accessing Object Properties -
// Dot Notation :
console.log(js.name);

// Bracket Notation :
console.log(js['version']);

// How to replace value in objects
// Changes are made in original array
console.log(js.author = 'Mr. Brendan Eich');
console.log(js);

// How to delete value in objects
// Changes are made in original array
console.log(delete js.author);
console.log(js);


console.log('');
// Nested Objects
let countries = {
    India:{
        capital: 'New Delhi',
        language: 'Hindi',
        nationality: 'Indian'
    },
    USA: {
        capital: 'Washington DC',
        language: 'English',
        nationality: 'American'
    },
    UK:{
        capital: 'London',
        language: 'English',
        nationality: 'British'
    }

}
console.log(countries);
console.log(countries.UK.nationality);


console.log('');
// Array of Object 
let apps = [
    {
        brand: 'Myntra',
        type: 'Shopping',
        store: 'No'
    },
    {
        brand: 'Lenskart',
        type: 'Glasses',
        store: 'Yes'

    },
    {
        brand: 'Shadi.com',
        type: 'Martial',
        store: 'No'
    }
]
console.log(apps);
console.log(apps[0]);
console.log(apps[1].type);