
const a = document.querySelector('a'); //anker 
//* changing properties
console.log(a.getAttribute('href')); //printing the href proptertie
a.removeAttribute('href')               //removing
console.log(a.getAttribute('href')); //check for the remove
a.setAttribute('href', 'index.html') ;// set a new one

//* Classes and content
const h1 = document.querySelector('.main-title');
h1.textContent = "hello from JS"
h1.classList.add('bg-blue');
h1.classList.remove('bg-blue');
h1.classList.add('bg-green');

//*Elements in the DOM
const divMain = document.querySelector('main'); //Wheare are we going to store our new element
const newP = document.createElement('P'); //new P
divMain.append(newP); //Appending the empty p
newP.textContent = 'New p from js';
newP.classList.add('al-center', 'bg-green');

const newP2 = document.createElement('P');
newP2.textContent = "NewP2";
divMain.append(newP2);
newP2.classList.add('bg-blue');
newP2.remove();