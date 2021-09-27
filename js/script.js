const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const faders = document.querySelectorAll(".fade-in");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px";
};
const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
           return;   
        } else {
           entry.target.classList.add('appear');
           appearOnScroll.unobserve(entry.target);
        }
    })
}, 
appearOptions); 

faders.forEach(fader => {
  appearOnScroll.observe(fader);  
})
