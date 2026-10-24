
/*** Dark Mode ***

  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE)
  - [ ] Any time after
***/

// Step 1: Select the theme button
const themeButton = document.getElementById("theme-button");
// document refers to the webpage.
// getElementById("theme-button") searches the HTML file for the element with that ID.
// const themeButton stores a reference to that element so we can use it later.
// overall, the line connects our JS to the existing HTML button: 
// <button id="theme-button" type="button">Toggle Dark Mode</button>

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // document.body selects the webpage's <body> element.
    // classList accesses the element's CSS classes.
    // .toggle("dark-mode") adds the class if it isn't present, or removes it if it is.
    // overall, the line makes it so that function can switch between light and dark mode. 
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
// and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click",toggleDarkMode);
// .addEventListener() tells JS to listen for an interaction.
// "click" specifies the interaction JS is listening for. 

