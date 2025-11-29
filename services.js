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