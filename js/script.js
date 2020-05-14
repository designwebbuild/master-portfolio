window.addEventListener('DOMContentLoaded', (event) => {
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

burgerBtn.addEventListener('click', () => {
  let burgerNav = document.getElementById('burger-nav');
  burgerNav.classList.toggle('burger-nav-show');
  burgerBtn.classList.toggle('burger-open');
});

// Button to call about section
aboutBtnBurger.addEventListener('click', () => {
  nameSection.style.display = 'none';
  aboutSection.style.display = '';
  workSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// Button to call work section
workBtnBurger.addEventListener('click', () => {
nameSection.style.display = 'none';
workSection.style.display = '';
aboutSection.style.display = 'none';
contactSection.style.display = 'none';
});

// Button to call home section
homeBtnBurger.addEventListener('click', () => {
nameSection.style.display = '';
workSection.style.display = 'none';
aboutSection.style.display = 'none';
contactSection.style.display = 'none';
});

// Button to call contact section
contactBtnBurger.addEventListener('click', () => {
nameSection.style.display = 'none';
aboutSection.style.display = 'none';
workSection.style.display = 'none';
contactSection.style.display = '';
});

});