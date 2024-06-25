// Welcome to JavaScript Notes.

// In this file we will be discussing arrays  in detail.

// Arrays :
// - arrays are not actually array it is OBJECT
// let array = [1, 2, 3];
// how JS looks at it:
// array = {
//  0:1,
//  1:2,  
//  2:3
// }


// Simple Array Method :
// Push - Pop - Unshift - Shift
// Changes are made in original array.
let array = ['a', 'b', 'c', 'd'];
console.log(array);
console.log(array.length);   

// 1) push :
// adds element at the end of array.
console.log(array.push('Voila'));
console.log(array);

// 2) pop : 
// deletes element from the end & returns it.
console.log(array.pop());
console.log(array);

// 3) Unshift :
// adds element at the beginning
console.log(array.unshift('Bonjour'));
console.log(array);

// 4) Shift :
// deletes element from the beginning
console.log(array.shift());
console.log(array);


console.log('');
// Let's discuss some more important methods :
// 5) indexOf :
// To find which element is on which index
// If an element doesn't exist it outputs -1
console.log(array.indexOf('c'));
console.log(array.indexOf('j'));


console.log('');
// 6) includes :
// to check if an element exist or not.
// outputs in boolean value.
console.log(array.includes('a'));
console.log(array.includes('voila'));

console.log('');
// 7) concat :
// merge two array or add to array
// doesn't change the original array, returns a copy of it.
console.log(array.concat('e', 'f'));
console.log(array);

let array2 = ['bado', 'badi', 'bado', 'badi'];
console.log(array.concat(array2));
console.log(array);
console.log(array2);


console.log('');
// 8) Reverse :
// reverses the entire array.
// makes changes in original array
console.log(array.reverse());
console.log(array);


console.log('');
// 9) Array Slice:
// Original array remains the same
// provides some section of from the original array, -1 gives last element
let number = [1, 2, 3, 4, 5];
console.log(number);
console.log(number.slice(0,2));
console.log(number.slice(-1));


console.log('');
// 10) Splice method:
// Used for making changes in original array
console.log(number);
console.log(number.splice(0,1, "hello"));
console.log(number);
console.log(number.splice(4, 5, "bye"));
console.log(number);


console.log('');
// Loops with array :
let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
for ( let i = 0; i < days.length; i++){
    console.log(`On index ${i} : ${days[i]}.`)
}


console.log('');
// Nested arrays :
let nestedArrays = [
    ['Apple', 'Mango'],
    ['Monday', 'Friday'],
    ['Summers', 'Winters'],
    ['Cricket', 'Football']
]
console.log(nestedArrays);
console.log(nestedArrays.length);
console.log(nestedArrays[0][1])


console.log('');
// Loop on nested arrays :
for(let i = 0; i < nestedArrays.length; i++){
    console.log(`Value of outer index ${i} : ${nestedArrays[i]}`)
    for(let j = 0; j < nestedArrays[i].length; j++){
        console.log(`Value of inner index ${j} : ${nestedArrays[j]}`);
    }
    
}