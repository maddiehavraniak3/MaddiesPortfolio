document.addEventListener('DOMContentLoaded', function() {
    const panels = document.querySelectorAll('.panel');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    let currentPanel = 0;

    function showPanel(index) {
        panels.forEach((panel, i) => {
            if (i === index) {
                panel.style.display = 'block';
            } else {
                panel.style.display = 'none';
            }
        });
    }

    nextBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentPanel < panels.length - 1) {
                currentPanel++;
                showPanel(currentPanel);
            }
        });
    });

    prevBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (currentPanel > 0) {
                currentPanel--;
                showPanel(currentPanel);
            }
        });
    });

    // Initialize first panel view
    showPanel(currentPanel);
});
