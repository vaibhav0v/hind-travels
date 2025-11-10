// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Navigation between sections
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Hide mobile menu after click
        document.querySelector('nav ul').classList.remove('show');

        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to clicked link
        this.classList.add('active');

        // Hide all sections
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const target = this.getAttribute('data-target');
        document.getElementById(target).classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Back to top button visibility
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Back to top functionality
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Booking form submission
document.querySelector('.book-btn').addEventListener('click', function() {
    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;

    if (pickup && destination && date && passengers) {
        alert(`Thank you for your booking!\n\nPickup: ${pickup}\nDestination: ${destination}\nDate: ${date}\nPassengers: ${passengers}\n\nWe will confirm your booking shortly.`);
    } else {
        alert('Please fill in all the booking details.');
    }
});

// Service buttons
document.querySelectorAll('.service-btn').forEach(button => {
    button.addEventListener('click', function() {
        const serviceName = this.closest('.service-card').querySelector('h3').textContent;
        alert(`Thank you for your interest in our ${serviceName} package! Our travel expert will contact you shortly with more details.`);
    });
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('.newsletter-input').value;
    if (email) {
        alert(`Thank you for subscribing with email: ${email}\nYou will receive our latest travel offers soon!`);
        this.reset();
    }
});

// Fade in elements on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
// Initial check
fadeInOnScroll();