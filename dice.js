document.addEventListener('DOMContentLoaded', () => {
    const dice = document.querySelector('.dice');
    const sides = document.querySelectorAll('.side');
    
    dice.addEventListener('click', () => {
        if (dice.classList.contains('stopped')) {
            // Remove the 'stopped' class and reset the dice
            dice.classList.remove('stopped');
            sides.forEach(side => side.classList.remove('clicked'));
        } else {
            // Stop the dice on a random side and navigate to the corresponding URL
            const randomSide = Math.floor(Math.random() * 6);
            sides.forEach((side, index) => {
                if (index === randomSide) {
                    side.classList.add('clicked');
                    setTimeout(() => {
                        window.location.href = side.getAttribute('data-url');
                    }, 1000); // 1 second delay to see the dice stopping effect
                } else {
                    side.classList.remove('clicked');
                }
            });
            dice.classList.add('stopped');
        }
    });
});
