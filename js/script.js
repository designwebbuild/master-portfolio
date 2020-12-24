
  /*
* DOM elements
*/
let homeBtn = document.getElementById('home');
let aboutBtn = document.getElementById('about');
let workBtn = document.getElementById('work');
let contactBtn = document.getElementById('contact');
let aboutSection = document.getElementById('about-section');
let workSection = document.getElementById('work-section');
let nameSection = document.getElementById('name-section');
let contactSection = document.getElementById('contact-section');
let burgerBtn = document.getElementById('burger');



// Hidden on page load
nameSection.style.display = '';
aboutSection.style.display = 'none';
workSection.style.display = 'none';
contactSection.style.display = 'none';

// Button to call about section
aboutBtn.addEventListener('click', () => {
    nameSection.style.display = 'none';
    aboutSection.style.display = '';
    workSection.style.display = 'none';
    contactSection.style.display = 'none';
});

// Button to call work section
workBtn.addEventListener('click', () => {
  nameSection.style.display = 'none';
  workSection.style.display = '';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// Button to call home section
homeBtn.addEventListener('click', () => {
  nameSection.style.display = '';
  workSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// Button to call contact section
contactBtn.addEventListener('click', () => {
  nameSection.style.display = 'none';
  aboutSection.style.display = 'none';
  workSection.style.display = 'none';
  contactSection.style.display = '';
});

// Burger menu functionality
let homeBtnBurger = document.getElementById('home-burger');
let aboutBtnBurger = document.getElementById('about-burger');
let workBtnBurger = document.getElementById('work-burger');
let contactBtnBurger = document.getElementById('contact-burger');
let burgerNav = document.getElementById('burger-nav');

burgerBtn.addEventListener('click', () => {
  burgerNav.classList.toggle('burger-nav-show');
  burgerBtn.classList.toggle('burger-open');
});


// Button to call about section
aboutBtnBurger.addEventListener('click', () => {
  nameSection.style.display = 'none';
  aboutSection.style.display = '';
  workSection.style.display = 'none';
  contactSection.style.display = 'none';
  burgerNav.classList.remove('burger-nav-show');
  burgerBtn.classList.remove('burger-open');
});

// Button to call work section
workBtnBurger.addEventListener('click', () => {
nameSection.style.display = 'none';
workSection.style.display = '';
aboutSection.style.display = 'none';
contactSection.style.display = 'none';
burgerNav.classList.remove('burger-nav-show');
burgerBtn.classList.remove('burger-open');
});

// Button to call home section
homeBtnBurger.addEventListener('click', () => {
nameSection.style.display = '';
workSection.style.display = 'none';
aboutSection.style.display = 'none';
contactSection.style.display = 'none';
burgerNav.classList.remove('burger-nav-show');
burgerBtn.classList.remove('burger-open');
});

// Button to call contact section
contactBtnBurger.addEventListener('click', () => {
nameSection.style.display = 'none';
aboutSection.style.display = 'none';
workSection.style.display = 'none';
contactSection.style.display = '';
burgerNav.classList.remove('burger-nav-show');
burgerBtn.classList.remove('burger-open');
});


// Dark mode functionality
const modeSwitchBtn = document.querySelector('.mode-btn');

// Set current theme to the new one


function darkModeToggle() {
  // Get the current selected theme, it should be 'light'
  let currentTheme = document.documentElement.getAttribute('data-theme');

  const sunIcon = document.querySelector('.fa-sun');

  // Switch between 'dark' and 'light'
  let switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
  let switchLogo = currentTheme === 'dark' ? 'img/logo-black.svg' : 'img/logo-white.svg';

  document.documentElement.setAttribute('data-theme', switchToTheme);
  document.querySelector('.logo-img img').setAttribute('src', switchLogo);
  sunIcon.classList.toggle('fa-moon');


}

modeSwitchBtn.addEventListener('click', () => {
  darkModeToggle();
});