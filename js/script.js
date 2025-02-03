var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// nav togler
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('#menu a'); // Select all links inside the menu

btn.addEventListener('click', navToggle);

// Function to open/close menu
function navToggle() {
    if (menu.classList.contains('hidden')) {
        // Opening the menu
        menu.classList.remove('hidden', 'animate-out');
        menu.classList.add('flex', 'animate-in');
        btn.classList.add('open'); // Add open class to hamburger
    } else {
        // Closing the menu with animation
        menu.classList.remove('animate-in');
        menu.classList.add('animate-out');
        btn.classList.remove('open'); // Remove open class from hamburger

        // Wait for animation to complete before hiding
        setTimeout(() => {
            menu.classList.add('hidden');
            menu.classList.remove('flex', 'animate-out');
        }, 800); // Match duration of CSS animation
    }
}

// Close menu when a menu link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('animate-in');
        menu.classList.add('animate-out');
        btn.classList.remove('open'); // Reset hamburger button

        // Wait for animation to complete before hiding
        setTimeout(() => {
            menu.classList.add('hidden');
            menu.classList.remove('flex', 'animate-out');
        }, 800);
    });
});



const aTags = document.querySelectorAll('.hvr');
const sections = document.querySelectorAll('section');
const homeLink = document.querySelector('.hvr[href="#Home"]'); // Select Home link

// Function to remove active styles from all aTags
function removeActiveStyles() {
    aTags.forEach(link => link.classList.remove('active', 'text-[#FF0000]'));
}

// Set Home as active initially
homeLink.classList.add('active', 'text-[#FF0000]');

// Intersection Observer to track scrolling
const observer = new IntersectionObserver(entries => {
    let anySectionVisible = false; // Track if any section is visible

    entries.forEach(entry => {
        const targetId = entry.target.getAttribute('id');
        const targetLink = document.querySelector(`.hvr[href="#${targetId}"]`);

        if (entry.isIntersecting) {
            removeActiveStyles();
            targetLink.classList.add('active', 'text-[#FF0000]');
            anySectionVisible = true;
        }
    });

    // If no section is visible (e.g., scrolled to top), keep Home active
    if (!anySectionVisible) {
        removeActiveStyles();
        homeLink.classList.add('active', 'text-[#FF0000]');
    }
}, {
    threshold: 0.6 // Trigger when 60% of the section is visible
});

// Observe each section
sections.forEach(section => observer.observe(section));

// Click event to manually highlight clicked aTags
aTags.forEach(link => {
    link.addEventListener('click', (event) => {
        removeActiveStyles();
        event.target.classList.add('active', 'text-[#FF0000]');
    });
});






var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    },
});

var swiper3 = new Swiper(".mySwiper3", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});