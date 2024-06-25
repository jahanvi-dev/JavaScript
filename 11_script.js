// Welcome to JavaScript Notes - 

// In this file we will be studying about DOM in JS -

// Each time we access a webpage, browser will create a corresponding model of the webpage that is called DOM.
// Primarily used for accessing webpage content via JavaScript :
// to either modify existing content or add new content.


// Selcting Elements -
// Id gets selected by using #
// Class gets selected by using .
// 1) getElementById() :
// Selects an element based on its ID, Syntax : getElementById('Id name');

// 2) getElementsByClassName() :
// Selects all elements based on class name, Syntax : getElementsByClassName('class name);

// 3) getElementsByTagName() :
//  Selects all elements based on element name, Syntax : getElementsByTagName('li');

// 4) querySelector() :
// Returns the first element matching the selector('#id - name')

// 5) querySelectorAll();
// Returns all elements matching the selector('.class name')

// Selects all elements based on - 
// 6) document.anchors
// 7) document.forms
// 8) document.images
// 9) document.head
// 10) document.body


// Text Nodes -
// 1) textContent
// allows us to access the text content of a node/element

// 2) nodeValue
// allows access to the content of a node/element

// 3) innerHTML 
//  allows us to access the HTML content of a node

// 4) createTextNode();
// Methods allows us to create text nodes.

// 5) createAttribute();
// Method allows us to create attributes node.

// 6) appendchild();
// Method allows us to add nodes in the body.

// 7) removeChild();
// Method allows us to remove nodes from the body.


// Event Listeners - 
// Handle events that occur in the DOM like : click, mouse movements, keypresses & more.
// Fundamental part for making webpages interactive.


// Creating elements via JS
let h1 = document.createElement('h1');
h1.textContent = 'Hey, I was built in JavaScript.';
h1.style.color = 'chartreuse'
document.querySelector('body').appendChild(h1);


// Mouse Events - 
// onclick : When users clicks on the element.

// 1) Click Event Listeners -
let download_button = document.getElementById('download');
download_button.addEventListener('click', function(){
    // console.log('Download button clicked');
    download_button.textContent = 'Downloading...'
    download_button.style.backgroundColor ='green'
    download_button.style.borderRadius = '15px'
});



// 2) ondbclick : When user double - clicks on an element.
let doubleClick = document.getElementById('dblclick');
doubleClick.addEventListener('dblclick', function(){
    // console.log('Double Clicked');
    doubleClick.textContent = "You've double clicked."
    doubleClick.style.backgroundColor ='cadetblue'
    doubleClick.style.color = 'black'
    doubleClick.style.borderRadius = '2px'
    
})


// 3) onmousemove : moving over an element.
let mouseMove = document.getElementById('mouseMove');
mouseMove.addEventListener('mousemove', function(){
    mouseMove.style.backgroundColor ='white'
    mouseMove.textContent = '';
    mouseMove.style.color = 'black'
    mouseMove.style.borderRadius = '50%'
    mouseMove.style.transform = 'translateX(80%)'
    
})


// 4) onmouseout : When cursor moves out of an element.
let mouseOut = document.getElementById('mouseOut');
mouseOut.addEventListener('mouseout', function(){
    console.log('Mouse was released');
    mouseOut.textContent = "Mouse has moved duh..."
    mouseOut.style.backgroundColor ='orange'
    mouseOut.style.color = 'black'
    mouseOut.style.borderRadius = '2px'
    
})


// 5) onmouseover : mouse moved over an element.
let mouseOver = document.getElementById('mouseOver');
mouseOver.addEventListener('mouseover', function(){
    console.log('Mouse was over the element');
    mouseOver.textContent = "I like this pink color."
    mouseOver.style.backgroundColor ='pink'
    mouseOver.style.color = 'black'
    mouseOver.style.borderRadius = '2px'
    
})








