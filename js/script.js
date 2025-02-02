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

btn.addEventListener('click', navToggle);

function navToggle() {
    if (menu.classList.contains('hidden')) {
        btn.classList.add('open');
        // Opening the menu
        menu.classList.remove('hidden', 'animate-out');
        menu.classList.add('flex', 'animate-in');
    } else {
        // Closing the menu with animation
        btn.classList.remove('open');
        menu.classList.remove('animate-in');
        menu.classList.add('animate-out');

        // Wait for animation to complete before hiding
        setTimeout(() => {
            menu.classList.add('hidden');
            menu.classList.remove('flex', 'animate-out');
        }, 800); // Match duration of CSS animation
    }
}

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
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
        delay: 2500,
        disableOnInteraction: false,
    },
});