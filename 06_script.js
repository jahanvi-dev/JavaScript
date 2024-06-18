// Welcome to JavaScript Notes :

// In this file, we will be studying about loops in JavaScript.

// Loops :
// Allows us to execute a block of code repeatedly based on the condition.

// 1) For Loop :
// When you know in advance how many times you want to execute a statement.

for(let i = 5; i <= 10; i++){
    console.log(i);
}      // outputs 5 to 10                 


console.log('');
// 2) While Loop :
// When you want to execute a block of code as long as the specified condition is true.
let i = 4;
while ( i <= 40){
    console.log(i);
    i = i+4;
    
}

console.log('');
// 3) Do - while Loop :
// Similar to while loop, but this executes the code block once before checking the condition.
let a = 8;
do {
    console.log(a);
    a = a + 8;
} while ( a <= 80);


console.log('');
// 4) For - of Loop :
// loop is used to iterate over iterable objects (like arrays, strings, maps, sets, etc.).
// iterate over a single element.
let array = ['A', 'B', 'C', 'D', 'E'];
for( let letters of array){
    console.log(letters);
}

// an alertnative to do so :
for ( i = 0; i < array.length; i++){
    console.log(i, array[i]);
}

console.log('');
// 5) For - in Loop :
// loop is used to iterate over the properties of an object.
let array2 = ['Welcome', 'to', 'JavaScript', 'Repositories', 'by', 'Jahanvi Yadav.'];
for ( let msg in array2){
    console.log(array2[msg]);
}


console.log('');
// 6) For - each Method :
// method is an array method that executes a provided function once for each array element.
// ce prints the element on the console.
// index prints the index of the element on the console
// array prints the entire array on the console
// return doesn't function in forEach method, it returns undefined.
// doesn't return an new array, actions are performed on original array
let forEachArray = array.forEach( (ce, index, array) => {
    // console.log(ce);
    // console.log(index);
    // console.log(array);
    
    // return ((`${index} - ${ce}`)); 

    console.log(`On index ${index} the value is : ${ce}`);

});

console.log('');
console.log(forEachArray);
// 7) Map on array :
// Map returns the elements, thus return functions on map
// The original array remains untouched, new array is returned
let mapArray = array2.map((ce, index, array) => {
    return `${index} - ${ce}`;
})

console.log(mapArray);

// Table of 3 using map function :
let ones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tableOf3 = ones.map((ce, index,array) => {
    return ` 3 X ${index + 1} = ${ce* 3}`
});

console.log(tableOf3);