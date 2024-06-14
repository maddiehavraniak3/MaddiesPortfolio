document.addEventListener('DOMContentLoaded', function() {
    const dice = document.querySelector('.dice');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
    const sides = document.querySelectorAll('.side');

    sides.forEach(side => {
        side.addEventListener('click', function() {
            // Add 'clicked' class to the clicked side
            side.classList.add('clicked');

            // Get the URL from the data attribute
            const url = side.getAttribute('data-url');

            // Navigate to the page after a short delay
            setTimeout(() => {
                window.location.href = url;
            }, 300); // 300ms delay to show the red color
        });

        side.addEventListener('mouseover', function() {
            side.style.backgroundColor = '#eee';
        });

        side.addEventListener('mouseout', function() {
            side.style.backgroundColor = '#fff';
        });

        side.addEventListener('click', function() {
            dice.classList.add('stopped');
            const content = getContent(side);
            showModal(content);
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    function getContent(side) {
        switch (side.classList[1]) {
            case 'side1':
                return `<h2>About Me</h2><p>Brief introduction and personal background.</p><a href="about.html">Full About Page</a>`;
            case 'side2':
                return `<h2>Education</h2><p>Key information about my Computer Science degree from the University of South Carolina.</p><p>Highlights of relevant courses and achievements.</p>`;
            case 'side3':
                return `<h2>Professional Experience</h2><p>Overview of my roles at Ualett, focusing on major accomplishments and projects.</p>`;
            case 'side4':
                return `<h2>Skills and Certifications</h2><p>Interactive skill tree preview.</p><p>Clickable certifications and badges with short descriptions.</p>`;
            case 'side5':
                return `<h2>Projects</h2><p>Showcase of major projects like the tracking and logistics system for Irman Sod and the cross-platform app.</p><a href="projects.html">Projects</a>`;
            case 'side6':
                return `<h2>Testimonials</h2><p>Preview of the testimonials carousel.</p><p>Quotes from colleagues, mentors, and clients with links to full testimonials.</p>`;
            default:
                return `<h2>Content</h2><p>Default content.</p>`;
        }
    }

    function showModal(content) {
        modalBody.innerHTML = content;
        modal.style.display = 'block';
    }
});
