// initial.js
document.addEventListener('DOMContentLoaded', function() {
    const box = document.querySelector('.box');
    const cardsContainer = document.querySelector('.cards');
    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    const prompt = document.querySelector('.prompt');
    const blackjackAnnouncement = document.querySelector('.blackjack-announcement');

    const validPairs = [
        { card1: { value: 'JS' }, card2: { value: 'AS' } },
        { card1: { value: 'QS' }, card2: { value: 'AS' } },
        { card1: { value: 'KS' }, card2: { value: 'AS' } },
        { card1: { value: 'AS' }, card2: { value: 'JS' } },
        { card1: { value: 'AS' }, card2: { value: 'QS' } },
        { card1: { value: 'AS' }, card2: { value: 'KS' } }
    ];

    function getCardImageUrl(card) {
        return `https://deckofcardsapi.com/static/img/${card.value}.png`;
    }

    function updateCardImage(cardElement, card) {
        cardElement.src = getCardImageUrl(card);
    }

    function openGates() {
        document.querySelector('.left-gate').style.transform = 'translateX(-100%)';
        document.querySelector('.right-gate').style.transform = 'translateX(100%)';
    }

    box.addEventListener('click', function() {
        openGates();
        const pair = validPairs[Math.floor(Math.random() * validPairs.length)];

        updateCardImage(card1, pair.card1);
        updateCardImage(card2, pair.card2);

        cardsContainer.style.display = 'flex';
        blackjackAnnouncement.style.display = 'block';
        prompt.style.display = 'none';

        setTimeout(() => {
            window.location.href = 'dice.html';
        }, 2000);
    });
});

