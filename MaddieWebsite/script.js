document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.interest-card');
    const backButton = document.getElementById('back-button');

    // Add animation delay to each card
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // Parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        cards.forEach((card) => {
            const speed = card.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;

            card.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    });

    // Back button functionality
    backButton.addEventListener('click', () => {
        window.location.href = 'dice.html';
    });
});


