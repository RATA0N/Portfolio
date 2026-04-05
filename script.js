// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal-up');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 60;
    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Navbar Scroll Effect
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    navLinks.classList.toggle('open', menuOpen);
    menuToggle.innerHTML = menuOpen
        ? '<i class="fas fa-xmark"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (menuOpen) {
            menuOpen = false;
            navLinks.classList.remove('open');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Toast Notification System
function showToast(message, icon = 'fa-circle-check') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas ${icon}"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('out');
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

// Only apply toast to empty links
document.querySelectorAll('a[href="#"]').forEach(link => {
    if(link.classList.contains('logo')) return; // Don't toast the logo
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('This section is coming soon.', 'fa-clock');
    });
});
