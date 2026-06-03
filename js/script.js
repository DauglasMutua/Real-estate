// ========================
// Mobile Navigation Toggle
// ========================
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ========================
// Form Submission
// ========================
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Simple validation and success message
    if(name && email && phone && message) {
        alert('Thank you for reaching out! We will contact you shortly.');
        this.reset();
    }
});

// ========================
// Smooth Scroll for Scroll Indicator
// ========================
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});
