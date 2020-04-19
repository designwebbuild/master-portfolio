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
let body = document.querySelector('.container');
let work = document.querySelector('.work');

// Hidden on page load
nameSection.style.display = '';
aboutSection.style.display = 'none';
workSection.style.display = 'none';
contactSection.style.display = 'none';

// Button to call about section
aboutBtn.addEventListener('click', () => {
    nameSection.style.display = 'none';
    // aboutSection.classList.add('show');
    aboutSection.style.display = '';
    workSection.style.display = 'none';
    contactSection.style.display = 'none';
});

// Button to call work section
workBtn.addEventListener('click', () => {
  nameSection.style.display = 'none';
  // workSection.classList.add('show');
  workSection.style.display = '';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
});

// Button to call home section
homeBtn.addEventListener('click', () => {
  // nameSection.classList.add('show');
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
  // contactSection.classList.add('show');
  contactSection.style.display = '';
});

});