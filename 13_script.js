// Welcome to JavaScript Notes.

// In this file, we will be discussing async JS.

// async example : 
// 1) setTimeOut - 
// this code runs after sometime.

// 2) setInterval -
// this code runs after the particular specified time, over n over again.


// 3) Fetch API -
// this is basically a url, so response is dependent on third party.


// 4) Axios -
// just like API, but more developer friendly


// 5) Promise -
// the code written in this, will work itself & move to side stack. And, when the response is ready it runs.



// 👉 setTimeout :
setTimeout(function(){
//    console.log('Happy New Year !!')
},2000);


let a = setInterval(function(){
    console.log('Prints in every three seconds.')
},3000)

clearInterval(a);


// Fetch API -
fetch (`https://randomuser.me/api/`)
// .then(raw => {
//     console.log(raw);
// })  not for us to read, it is computer readable screen. Convert it to JSON for readability.
.then(raw => raw.json())
.then(read => console.log(read.results[0].name));



// Jokes API -
fetch(`https://restcountries.com/v3.1/all`)
.then(raw => raw.json())
.then(data => console.log(data[1].currencies))
.catch(error => console.log('some error'))


// Axios me we use only one then
axios.get(`https://randomuser.me/api/`)
.then(result => console.log(result.data.results[0].gender));


// Promises -
// below is the syntax
// new Promise(function(resolve, reject) {

// })
const gender = new Promise(function(resolve, reject) {
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(data => {
        if(data.results[0].gender === 'female') resolve();
        else reject();
    });
});

gender.then(function(){
    console.log('Female');
})
.catch(function(){
    console.log('Male');
})


console.log(gender);


// Callbacks - 
function abcd(a,b){
    a();
}
abcd(function(){
    console.log('Callback')
});








