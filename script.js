
// Loading screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1200);
});

// Typing animation
const words = [
    "Java Developer",
    "Backend Developer",
    "Web Developer",
    "Salesforce Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");
const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

function typeEffect() {
    const word = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typing.textContent = word.substring(0, charIndex);

    let speed = deleting ? 45 : 90;

    if (!deleting && charIndex === word.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

if (reducedMotion) {
    typing.textContent = "Java Developer";
} else {
    typeEffect();
}

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal, .skill-card").forEach(item => {
    observer.observe(item);
});

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();
