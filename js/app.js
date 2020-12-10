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
const sections = document.querySelectorAll("section");
const navBar = document.querySelector("#navbar__list");
const df = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function buildNav() {
  // create nav link for each section
  sections.forEach((section) => {
    // create <li></li>
    const liTag = document.createElement("li");

    // create <a></a> and insert data
    const aTag = document.createElement("a");
    aTag.setAttribute("href", `#${section.id}`);
    aTag.textContent = section.dataset.nav;

    // appending process
    liTag.appendChild(aTag);
    df.appendChild(liTag);
    navBar.appendChild(df);
  });
}

buildNav();

// Add class 'active' to section when near top of viewport

  // 1. Check if section intersects with viewport using the Intersection Observer API

  // Creating an intersection observer and options
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  let observer = new IntersectionObserver(activeState, options);

  // Adding each section to be observed
  sections.forEach((section) => observer.observe(section));

  // cb that will be triggered
  function activeState(entries) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 1) {
        entry.target.classList.toggle("your-active-class");
      } else {
        entry.target.classList.remove("your-active-class");
      }
    });
  }

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
