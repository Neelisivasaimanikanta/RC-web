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

 const marketingServices = [
    { 
        title: "Meta Ads", 
        description: "Maximize engagement with highly targeted Meta ad campaigns. Our Meta advertising solutions help you reach the right audience through precision targeting, creative ad design, and strategic campaign planning. Benefit from dynamic ad placements, real-time performance tracking, and continuous optimization to ensure maximum ROI for your business.", 
        bg: "assets/meta.png" 
    },
    { 
        title: "Google Ads & SEO", 
        description: "Drive instant traffic and long-term growth through a combination of paid Google Ads and advanced Search Engine Optimization. Our team ensures your business ranks higher in search results while attracting quality leads with highly optimized ad campaigns and SEO strategies.", 
        bg: "assets/google seo.png" 
    },
    { 
        title: "YouTube Ads", 
        description: "Boost your brand visibility with engaging YouTube video marketing. We create powerful video ads that captivate your audience, drive clicks, and build strong brand awareness. Our targeting methods ensure your videos reach the right viewers at the right time.", 
        bg: "assets/youtube.jpg" 
    },
    { 
        title: "Social Media Management", 
        description: "Grow your social community with expert social media management. From creating consistent, visually appealing content to managing daily interactions, we help your brand stay active and relevant across all social platforms like Facebook, Instagram, LinkedIn, and more.", 
        bg: "assets/Social-Media-Management.png" 
    },
    { 
        title: "Content Marketing", 
        description: "Build authority and trust through powerful content marketing strategies. We craft blogs, social media posts, newsletters, and more to connect with your audience, deliver value, and establish your brand as an industry leader.", 
        bg: "assets/content marketing.png" 
    },
    { 
        title: "Email & SMS Campaigns", 
        description: "Automate and personalize your customer journeys with effective Email and SMS campaigns. We create tailored campaigns that deliver the right message at the right time, increasing engagement, conversions, and customer loyalty.", 
        bg: "assets/e mail and sms campaign.png" 
    },
    { 
        title: "Influencer Marketing", 
        description: "Expand your brand’s reach by partnering with trusted influencers. We connect you with influencers that align with your brand values and target audience, creating authentic endorsements that drive awareness and boost sales.", 
        bg: "assets/influencer-marketing.png" 
    },
    { 
        title: "Brand Strategy", 
        description: "Develop a strong and unique brand identity with our strategic branding services. From logo design to brand positioning, we help you create a lasting impression that resonates with your audience and differentiates you from competitors.", 
        bg: "assets/brand.jpg" 
    },
    { 
        title: "Analytics & Reporting", 
        description: "Track and measure your marketing performance with our advanced analytics and reporting tools. Gain actionable insights, monitor KPIs, and make data-driven decisions to continuously improve your marketing outcomes.", 
        bg: "assets/Analytics & Performance Reporting.jpg" 
    },
    { 
        title: "Marketing Automation", 
        description: "Streamline your workflows with powerful marketing automation solutions. Automate repetitive tasks, nurture leads efficiently, and improve your campaign management with smart tools that save you time and increase productivity.", 
        bg: "assets/Marketing Automation.jpg" 
    }
];


        const serviceList = document.getElementById('serviceList');
        const serviceView = document.getElementById('serviceView');

        marketingServices.forEach((service, index) => {
            const btn = document.createElement('button');
            btn.textContent = service.title;
            btn.addEventListener('click', () => displayService(index));
            serviceList.appendChild(btn);

            const detailBlock = document.createElement('div');
            detailBlock.className = 'service-detail';
            detailBlock.innerHTML = `
                <img src="${service.bg}" alt="${service.title}">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            `;
            serviceView.appendChild(detailBlock);
        });

        function displayService(index) {
            const allDetails = document.querySelectorAll('.service-detail');
            allDetails.forEach(detail => detail.classList.remove('active-service'));
            allDetails[index].classList.add('active-service');
        }

        // Display the first service by default on page load
        window.onload = () => displayService(0);
