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
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// nav togler

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}

// Animation JS
const elements = document.querySelectorAll('.scroll-right-side-animation');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-once');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, {
    threshold: 0.4 // Trigger when 40% of the element is in view
});

elements.forEach(el => observer.observe(el));