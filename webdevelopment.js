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


document.querySelectorAll('.float-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'rotate(360deg)';
        icon.style.transition = 'transform 1s ease';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'rotate(0deg)';
    });
});


const webServices = [
            {
                title: "E-commerce Websites",
                description: "We design and develop secure, scalable, and user-friendly e-commerce platforms with intuitive checkout, product management, and payment gateway integration to boost your sales.",
                bg: "assets/E-commerce Websites.jpg"
            },
            {
                title: "Custom Websites",
                description: "We craft unique, tailor-made websites that perfectly align with your brand identity and deliver exceptional user experiences using the latest design trends and technologies.",
                bg: "assets/animated.jpg"
            },
            {
                title: "Web Applications",
                description: "We build interactive, dynamic web applications that streamline your processes, engage your users, and support your business growth with powerful backend systems.",
                bg: "assets/Web Applications.jpg"
            },
            {
                title: "Responsive Design",
                description: "Our websites are fully responsive, ensuring seamless performance and a visually stunning look across all devices including mobiles, tablets, and desktops.",
                bg: "assets/Responsive Design.jpg"
            },
            {
                title: "SEO Friendly Websites",
                description: "Our SEO-optimized websites are designed to help your business rank higher on search engines, attract more organic traffic, and increase your online visibility.",
                bg: "assets/seo friendly.png"
            },
            {
                title: "API Integration",
                description: "We offer seamless API integration services to connect third-party tools like payment gateways, social media platforms, CRMs, and other services for enhanced functionality.",
                bg: "assets/API Integration.png"
            },
            {
                title: "Maintenance & Support",
                description: "We provide comprehensive website maintenance, security updates, and performance monitoring to ensure your website remains fast, secure, and up-to-date.",
                bg: "assets/Maintenance & Support.png"
            },
            {
                title: "Web Hosting Solutions",
                description: "Our hosting solutions offer high-speed servers, daily backups, maximum uptime, and scalable resources to keep your website running smoothly and efficiently.",
                bg: "assets/Web Hosting Solutions.jpg"
            },
            {
                title: "CMS Development",
                description: "We develop custom and WordPress CMS solutions that empower your team to easily update, manage, and scale your website content without technical expertise.",
                bg: "assets/CMS Development.png"
            },
            {
                title: "Website Speed Optimization",
                description: "We optimize website loading speed by implementing image compression, lazy loading, caching, and code minimization to enhance user experience and SEO rankings.",
                bg: "assets/Website Speed Optimization.png"
            }
        ];

        const webServiceList = document.getElementById('webServiceList');
        const webServiceView = document.getElementById('webServiceView');

        webServices.forEach((service, index) => {
            const btn = document.createElement('button');
            btn.textContent = service.title;
            btn.addEventListener('click', () => displayService(index));
            webServiceList.appendChild(btn);

            const detailBlock = document.createElement('div');
            detailBlock.className = 'service-detail';
            detailBlock.innerHTML = `
                <img src="${service.bg}" alt="${service.title}">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            `;
            webServiceView.appendChild(detailBlock);
        });

        function displayService(index) {
            const allDetails = document.querySelectorAll('.service-detail');
            allDetails.forEach(detail => detail.classList.remove('active-service'));
            allDetails[index].classList.add('active-service');
        }

        window.onload = () => displayService(0);
