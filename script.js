// Menu icon toggle
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navBar.classList.toggle('active');
};

// Nav link active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-x');
    navBar.classList.remove('active');
};


// scroll reveal

ScrollReveal({ 
    reset: true,
    distance : '80px',
    duration : 2000,
    delay : 200
 });


 ScrollReveal().reveal('.home-content , .heading', { origin : 'top' });
 ScrollReveal().reveal('.home-img , .services-container, .portfolio-box, .contact form,  .about-content', { origin : 'bottom' });
 ScrollReveal().reveal('.about-img , .home-content h1', { origin : 'left' });
 ScrollReveal().reveal('.about-content , .home-content p', { origin : 'right' });



 

var typed = new Typed("#typed", {
    strings: ['Frontend developer', 'Web developer'],
    typeSpeed: 50, // Adjust the typing speed as needed
    backSpeed: 50, // Adjust the backspacing speed as needed
    startDelay: 1000, // Delay before typing starts
    loop: true, // Loop infinitely
    backDelay: 2000, // Delay before backspacing
});