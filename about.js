        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');
        const submenuToggle = document.getElementById('submenuToggle');
        const submenu = document.getElementById('submenu');

        // Hamburger toggle
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        // Mobile submenu toggle
        submenuToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                if (submenu.style.maxHeight) {
                    submenu.style.maxHeight = null;
                } else {
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                }
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                menu.classList.remove('active');
                submenu.style.maxHeight = null;
            }
        });

        // Reset menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                menu.classList.remove('active');
                submenu.style.maxHeight = null;
            }
        });

// Timeline Scroll Animation
window.addEventListener('scroll', revealTimeline);

function revealTimeline() {
    const items = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < windowHeight - 100) { // Trigger 100px before the item enters the viewport
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.about-card');
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardPosition < windowHeight - 100) {
                card.classList.add('show-card');
            }
        });
    });