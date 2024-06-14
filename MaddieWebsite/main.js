// main.js or secondary.js
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// main.js or secondary.js
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});



function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    // Restart dice animation if returning to dice section
    if (sectionId === 'dice-section') {
        const dice = document.querySelector('.dice');
        dice.classList.remove('stopped');
        dice.classList.add('spinning');
    }
}

// Initializing the dice spin animation on page load
window.addEventListener('DOMContentLoaded', () => {
    const dice = document.querySelector('.dice');
    if (dice) {
        dice.classList.add('spinning');
    }
});
