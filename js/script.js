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


// Hidden about me section on page load

aboutSection.hide();
workSection.hide();




// Button to call about section
aboutBtn.on('click', () => {
    nameSection.hide();
    aboutSection.fadeIn();
    workSection.hide();
});

// Button to call work section
workBtn.on('click', () => {
  nameSection.hide();
  workSection.fadeIn();
  aboutSection.hide();
});

homeBtn.on('click', () => {
  nameSection.fadeIn();
  workSection.hide();
  aboutSection.hide();
});