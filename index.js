
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
const rsvpForm = document.getElementById("rsvp-form");
// const creates a variable that cannot be reassigned.
// "rsvp-form" matches the id in the HTML file. 
// ^ that line connects the JS to the RSVP form which is in the HTML file. 

// Step 4: Create the RSVP submission function 
const handleRSVP = (event) => {
// => defines an arrow function. 
  event.preventDefault();
// preventDefault() prevents the browser from navigating or reloading as the default behavior when submitting an HTML form. 
// i.e., prevents the user from receiving the frowning face on the piece of paper icon. 

// removes red highlighting after correcting an invalid name, email, or state. 
document.getElementById("rsvp-name").classList.remove("rsvp-error");
document.getElementById("rsvp-state").classList.remove("rsvp-error");

// const name stores the user's name 
const name = document.getElementById("rsvp-name").value;
// .value retrieves the text currently entered in that field. 
  // validates the user's name: 
  if (name.trim().length <2) {
    document.getElementById("rsvp-name").classList.add("rsvp-error");
    alert("Please enter a name with at least 2 characters.");
    return;
  }

// const email stores the user's email 
const email = document.getElementById("rsvp-email").value;

// const state stores the user's state 
const state = document.getElementById("rsvp-state").value; 
  // validates the user's state: 
  if (state.trim().length < 2) {
    document.getElementById("rsvp-state").classList.add("rsvp-error");
    alert("Please enter a state with at least 2 characters.");
    return;
  }

// this line notifies when a participant has RSVP'd with their information. 
const newParticipant = document.createElement("p");
newParticipant.textContent = `🚀 ${name} from ${state} has RSVP'd.`;

// this line adds a new participant to the RSVP list.
document.querySelector(".rsvp-participants").appendChild(newParticipant);

// this line clears the RSVP form after submission. 
rsvpForm.reset();
};

// Step 5: Register the RSVP Submission Event Listener 
rsvpForm.addEventListener("submit", handleRSVP);


// Step 6: Detect Sections Entering the Screen
// finds all sections with the "revealable" class
const revealableSections = document.querySelectorAll(".revealable");
// .querySelectorAll(".revealable") finds all sections with the "revealable" class

// Watch whether each section enters or leaves the screen
const revealObserver = new IntersectionObserver((entries) => {
  // IntersectionObserver watches when sections enter or exist the screen. 
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // entry.isIntersecting checks whether the section is visible or not. 
            // section is on screen: reveal it
            entry.target.classList.remove("hidden");
            entry.target.classList.add("active");
        } else {
            // section is off screen: hide it
            entry.target.classList.remove("active");
            entry.target.classList.add("hidden");
        }
        // classList.add("active") makes the screen visible 
        // classList.add("hidden") makes the screen hidden
    });
}, {
    threshold: 0.1
    // the trigger when 10% of a section is visible 
});

// starts watching each section
revealableSections.forEach((section) => {
    revealObserver.observe(section);
    // .observe(section) starts monitorying that section. 
});
