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

const navBar = document.querySelector(`#navbar__list`);


/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const createElement = (ele) => {
  return document.createElement(ele);
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const buildNav = () => {
  const sections = document.querySelectorAll(`section`);
  const df = document.createDocumentFragment();

  // create nav link for each section
  sections.forEach((section) => {
    // create <li>
    const liTag = createElement(`li`);

    // create <a> and insert data
    const aTag = createElement(`a`);
    aTag.setAttribute(`href`, `#${section.id}`);
    aTag.textContent = section.dataset.nav;

    // appending process
    liTag.appendChild(aTag);
    df.appendChild(liTag);
    navBar.appendChild(df);
  });
};

// Add class 'active' to section when near top of viewport

// Check if section intersects with viewport using the Intersection Observer API

const setActiveSection = () => {
  const sections = document.querySelectorAll(`section`);

  // options to be passed in
  let options = {
    root: null,
    rootMargin: `0px`,
    threshold: 1,
  };

  // callback
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 1) {
        entry.target.classList.toggle(`your-active-class`);
      } else {
        entry.target.classList.remove(`your-active-class`);
      }
    });
  };

  // create observer
  let observer = new IntersectionObserver(callback, options);

  // Adding each section to be observed
  sections.forEach((section) => observer.observe(section));
};

// Scroll to anchor ID using scrollTO event

const scrollToSection = (evt) => {
  // prevents default jump to section
  evt.preventDefault();

  // extract value from href attr
  const id = evt.target.getAttribute(`href`);

  // ref that specific section
  const section = document.querySelector(`${id}`);

  // scroll to section
  window.scrollTo({
    top: section.offsetTop,
    behavior: `smooth`,
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNav();

// Scroll to section on link click
navBar.addEventListener(`click`, scrollToSection);

// Set sections as active
setActiveSection();
