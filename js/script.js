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
let contactSection = $('#contact-section');
let body = $('.container');
let work = $('.work');

// Hidden about me section on page load
nameSection.css('display', '');
aboutSection.css('display', 'none');
workSection.css('display', 'none');
contactSection.css('display', 'none');

// Button to call about section
aboutBtn.on('click', () => {
    nameSection.css('display', 'none');
    aboutSection.fadeIn();
    workSection.css('display', 'none');
    contactSection.css('display', 'none');
});

// Button to call work section
workBtn.on('click', () => {
  nameSection.css('display', 'none');
  workSection.fadeIn();
  aboutSection.css('display', 'none');
  contactSection.css('display', 'none');
});

homeBtn.on('click', () => {
  nameSection.fadeIn();
  workSection.css('display', 'none');
  aboutSection.css('display', 'none');
  contactSection.css('display', 'none');
});

contactBtn.on('click', () => {
  nameSection.css('display', 'none');
  aboutSection.css('display', 'none');
  workSection.css('display', 'none');
  contactSection.fadeIn();
})

// darkModeBtn.on('click', () => {
//   $('html').toggleClass('dark-mode');
  
//   $.fn.extend({
//     toggleText: function(a, b){
//         return this.text(this.text() == b ? a : b);
//     }
//   });
  
//   darkModeBtn.toggleText('Get Dark Mode', 'Switch Off');
// });

