
/* ================= Typing Animation ====================== */
var typed = new Typed('.typing', {
    strings: ['Web Developer', 'Front-End Developer', 'Freelancer', 'Web Designer', 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
});



const toggleButton = document.querySelector(".toggle");
const toggleIcon = toggleButton.querySelector("i");
const asideMenu = document.querySelector(".aside");
const navLinks = document.querySelectorAll(".nav-menu a"); // Select all links

// Toggle menu function
toggleButton.addEventListener("click", () => {
    asideMenu.classList.toggle("active");
    toggleButton.classList.toggle("active");

    // Change icon on toggle
    if (asideMenu.classList.contains("active")) {
        toggleIcon.classList.replace("fa-bars", "fa-times"); // Show 'X' icon
    } else {
        toggleIcon.classList.replace("fa-times", "fa-bars"); // Show '☰' icon
    }
});

// Close menu when clicking a navigation link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        asideMenu.classList.remove("active");  // Close menu
        toggleButton.classList.remove("active"); // Reset button state
        toggleIcon.classList.replace("fa-times", "fa-bars"); // Switch back to ☰ icon
    });
});
