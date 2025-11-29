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


        const consultingServices = [
            {
                title: "Business Strategy",
                description: "We develop comprehensive business strategies that foster sustainable growth, competitive advantage, and market leadership through innovation, operational efficiency, and customer-centric planning.",
                bg: "assets/Business Strategy.png"
            },
            {
                title: "Technology Consulting",
                description: "Our technology experts help you choose, implement, and optimize cutting-edge IT solutions, cloud services, and software that align with your business goals and improve digital capabilities.",
                bg: "assets/Technology Consulting.png"
            },
            {
                title: "Financial Consulting",
                description: "We offer financial planning, budgeting, investment analysis, and risk management services that help businesses maximize profitability, control costs, and make sound financial decisions.",
                bg: "assets/Financial Consulting.webp"
            },
            {
                title: "HR & Organizational Growth",
                description: "Our HR consulting focuses on building high-performance teams, improving company culture, designing effective HR policies, and creating organizational structures that support growth.",
                bg: "assets/HR & Organizational Growth.jpg"
            },
            {
                title: "Marketing Consulting",
                description: "We deliver marketing strategies powered by in-depth market research, customer behavior analysis, and data-driven campaigns to strengthen your brand and boost customer engagement.",
                bg: "assets/Marketing Consulting.jpg"
            },
            {
                title: "Operations Consulting",
                description: "Our experts streamline your operations, optimize workflows, and reduce costs by implementing efficient processes, automation tools, and performance measurement systems.",
                bg: "assets/Operations Consulting.jpg"
            },
            {
                title: "Startup Mentoring",
                description: "We mentor startups with guidance on product development, market entry, funding strategies, growth hacking, and building a scalable, investor-ready business model.",
                bg: "assets/Startup Mentoring.png"
            },
            {
                title: "IT Infrastructure",
                description: "We design, build, and upgrade IT infrastructure including networks, servers, security systems, and cloud environments that support your current and future business needs.",
                bg: "assets/IT Infrastructure.jpg"
            },
            {
                title: "Project Management",
                description: "We ensure your projects are successfully delivered by managing scope, time, resources, and risks with proven project management methodologies and best practices.",
                bg: "assets/Project Management.jpg"
            },
            {
                title: "Compliance & Regulations",
                description: "We help you navigate complex compliance requirements and regulatory frameworks, ensuring your business meets industry standards and operates legally and ethically.",
                bg: "assets/Compliance & Regulations.jpg"
            }
        ];

        const consultServiceList = document.getElementById('consultServiceList');
        const consultServiceView = document.getElementById('consultServiceView');

        consultingServices.forEach((service, index) => {
            const btn = document.createElement('button');
            btn.textContent = service.title;
            btn.addEventListener('click', () => displayService(index));
            consultServiceList.appendChild(btn);

            const detailBlock = document.createElement('div');
            detailBlock.className = 'service-detail';
            detailBlock.innerHTML = `
                <img src="${service.bg}" alt="${service.title}">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            `;
            consultServiceView.appendChild(detailBlock);
        });

        function displayService(index) {
            const allDetails = document.querySelectorAll('.service-detail');
            allDetails.forEach(detail => detail.classList.remove('active-service'));
            allDetails[index].classList.add('active-service');
        }

        window.onload = () => displayService(0);