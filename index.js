const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

const items = document.querySelectorAll(".accordion a");
 
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));


const events = document.querySelectorAll('.event');
events.forEach((event) => {
    event.addEventListener('click', function () {
        events.forEach((e) => {
            e.querySelector('.event-description').style.display = 'none';
        });
        this.querySelector('.event-description').style.display = 'block';
    });
});
function toggleEventDetails(eventId) {
    const event = document.getElementById(eventId);
    const eventDetails = event.querySelector(".event-details");
    const isVisible = eventDetails.classList.contains("show");
    const allEventDetails = document.querySelectorAll(".event-details");
    allEventDetails.forEach((details) => {
        details.classList.remove("show");
    });

    if (!isVisible) {
        eventDetails.classList.add("show");
    }
}
