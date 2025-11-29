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
// Google Maps Initialization
function initMap() {
    const location = { lat: 16.989064, lng: 81.804999 }; // Rajahmundry

    const map = new google.maps.Map(document.getElementById("custom-map"), {
        zoom: 14,
        center: location,
        styles: [
            { featureType: "all", elementType: "geometry", stylers: [{ color: "#e0f7fa" }] },
            { featureType: "road", elementType: "geometry", stylers: [{ color: "#81d4fa" }] },
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#0288d1" }] },
            { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#b3e5fc" }] },
            { featureType: "poi", elementType: "geometry", stylers: [{ color: "#ffffff" }] }
        ]
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        title: "We are here!"
    });
}
