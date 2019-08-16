/*
* DOM elements
*/
let homeBtn = $('#home');
let aboutBtn = $('#about');
let workBtn = $('#work');
let blogBtn = $('#blog');
let contactBtn = $('#contact');
let aboutSection = $('#about-section');
let workSection = $('#work-section');
let nameSection = $('#name-section');
let blogSection = $('#blog-section');
let body = $('.container');
let work = $('.work');


// Hidden about me section on page load
aboutSection.css('display', 'none');
workSection.css('display', 'none');

// Button to call about section
aboutBtn.on('click', () => {
    nameSection.css('display', 'none');
    aboutSection.fadeIn();
    workSection.css('display', 'none');
});

// Button to call work section
workBtn.on('click', () => {
  nameSection.css('display', 'none');
  workSection.slideDown();
  aboutSection.css('display', 'none');
});

homeBtn.on('click', () => {
  nameSection.fadeIn();
  workSection.css('display', 'none');
  aboutSection.css('display', 'none');
});