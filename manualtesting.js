// Navbar and Menu Functionality
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const submenuToggle = document.getElementById('submenuToggle');
const submenu = document.getElementById('submenu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

submenuToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        submenu.style.maxHeight = submenu.style.maxHeight ? null : submenu.scrollHeight + 'px';
    }
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('active');
        submenu.style.maxHeight = null;
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
        submenu.style.maxHeight = null;
    }
});

// Manual Testing Services
const manualTestingServices = [
    { title: "Functional Testing", description: "We verify each function of your web or mobile application to ensure it operates according to the requirements and delivers the expected output without any defects.", bg: "assets/Functional Testing.jpeg" },
    { title: "Usability Testing", description: "Our experts assess the user interface and experience to ensure your application is intuitive, user-friendly, and provides a smooth interaction flow across all devices.", bg: "assets/Usability Testing.jpeg" },
    { title: "Regression Testing", description: "We re-execute previous test cases to confirm that recent code changes haven’t introduced new bugs or impacted existing functionalities, ensuring continuous quality.", bg: "assets/Regression Testing.jpeg" },
    { title: "Cross Browser & Device Testing", description: "We test your application across multiple browsers and devices to ensure consistent performance, responsiveness, and compatibility for all users.", bg: "assets/Cross Browser Testing.jpeg" },
    { title: "Exploratory Testing", description: "Our testers explore the application without predefined scripts to uncover hidden issues, edge cases, and usability flaws that automated tests may miss.", bg: "assets/Exploratory Testing.jpeg" },
    { title: "Smoke & Sanity Testing", description: "We perform quick validation checks to ensure critical functionalities are working correctly after builds, updates, or deployments before deeper testing begins.", bg: "assets/Smoke Testing.jpeg" },
    { title: "User Acceptance Testing (UAT)", description: "We collaborate with stakeholders to ensure the application meets business needs and user expectations before final release, validating readiness for production.", bg: "assets/UAT Testing.jpeg" },
    { title: "Integration Testing", description: "Our team validates data flow and interactions between modules to ensure smooth communication and functionality across all integrated components.", bg: "assets/Integration Testing.jpeg" },
    { title: "Compatibility Testing", description: "We ensure your software performs optimally across various environments, operating systems, and network conditions for maximum reliability.", bg: "assets/Compatibility Testing.jpg" },
    { title: "Manual Performance Testing", description: "Through detailed manual analysis, we identify performance bottlenecks, test system behavior under different loads, and ensure stability during peak usage.", bg: "assets/Manual Performance Testing.jpeg" }
];

const webServiceList = document.getElementById('webServiceList');
const webServiceView = document.getElementById('webServiceView');

// Create buttons for each service
manualTestingServices.forEach((service, index) => {
    const btn = document.createElement('button');
    btn.textContent = service.title;
    btn.addEventListener('click', () => displayService(index));
    webServiceList.appendChild(btn);

    const detailBlock = document.createElement('div');
    detailBlock.classList.add('service-detail');
    if (index === 0) detailBlock.classList.add('active-service');

    detailBlock.innerHTML = `
        <img src="${service.bg}" alt="${service.title}">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;

    webServiceView.appendChild(detailBlock);
});

// Display selected service
function displayService(index) {
    const details = document.querySelectorAll('.service-detail');
    details.forEach((d, i) => {
        d.classList.toggle('active-service', i === index);
    });
}
