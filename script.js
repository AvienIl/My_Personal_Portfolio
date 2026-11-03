
// ============================
// MOBILE NAVIGATION
// ============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close menu after selecting a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


// ============================
// TYPING ANIMATION
// ============================

const typingElement = document.getElementById("typing");

const words = [
    "Student",
    "Future Professional",
    "Creative Thinker",
    "Aspiring Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 55 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1500;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ============================
// SCROLL REVEAL ANIMATION
// ============================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// ============================
// AUTOMATIC COPYRIGHT YEAR
// ============================

document.getElementById("year").textContent =
    new Date().getFullYear();
