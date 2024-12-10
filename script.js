/* ==================== PARALLAX EFFECT ==================== */
document.addEventListener("scroll", function () {
    const parallaxContainers = document.querySelectorAll(".parallax-container");

    parallaxContainers.forEach((container) => {
        const image = container.querySelector(".parallax-image");
        const containerTop = container.offsetTop;
        const scrollTop = window.scrollY;
        const containerHeight = container.offsetHeight;

        // Check if the container is in the viewport
        if (
            scrollTop + window.innerHeight > containerTop &&
            scrollTop < containerTop + containerHeight
        ) {
            const offset = (scrollTop - containerTop) * 0.5; // Adjust speed here
            image.style.transform = `translateY(${offset}px)`;
        }
    });
});

/* ==================== SCROLL SECTION ACTIVE LINK ==================== */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(
                ".navbar-nav a[href*=" + sectionId + "]"
            );

        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);

/* ==================== HAMBURGER MENU ==================== */
//Toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
//ketika humburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault(); //untuk membatalkan default action link
};
//klik diluar sidebar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
