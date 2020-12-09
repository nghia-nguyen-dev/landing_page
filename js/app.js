/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navBar = document.querySelector('#navbar__list');
const df = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildNav() {

  // create nav link for each section
  sections.forEach(createNavLink)

  function createNavLink(section) {
    // create <li>
    const liTag = document.createElement('li');

    // create <a>
    const aTag = document.createElement('a');
    aTag.setAttribute('href', `#${section.id}`)
    aTag.textContent = section.dataset.nav

    // appending process
    liTag.appendChild(aTag)
    df.appendChild(liTag)
    navBar.appendChild(df)

  }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


