console.log("Hello")

const counterText = document.getElementById("counter");
// const queryVersion = document.querySelector("#counter")

//Access the plus and minus and reset buttons
const resetButton = document.getElementById("reset-btn");
const plusButton = document.getElementById("plus-btn");
const minusButton = document.getElementById("minus-btn");

let count = 0;

//Write a function called `increase` that 
//when invoked, count will increase by 1 
//and the `counterText.textContent` is equal to count

function increase() {
  count++;
  counterText.textContent = count;
}

//Make two more functions called `reset` and `decrease`
// reset should set count = 0 while decrease should make count--

function reset() {
  count = 0;
  counterText.textContent = count;
}

function decrease() {
  count--;
  counterText.textContent = count;
}

resetButton.addEventListener("click", reset);
minusButton.addEventListener("click", decrease);
plusButton.addEventListener("click", increase);

const themeButtons = document.querySelectorAll(".theme-buttons")

// Write a for loop that will iterate through `themeButtons`
// and add an event listener to each element passing in 2 arguments
// `click` and the callback function `selectTheme` (which we will define later)

for (let i = 0; i < themeButtons.length; i++) {
  themeButtons[i].addEventListener('click', selectTheme)
}

// Write out selectTheme

// select the `body` and `main` elements
// write a query selector for all the buttons
// write a for loop that will iterate through `buttons`
// and set the `className` property to `theme`

function selectTheme(event) {
  const theme = event.target.textContent;
  document.querySelector('body').className = theme;
  document.querySelector('main').className = theme;
  const buttons = document.querySelectorAll('button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = theme;
  }
}