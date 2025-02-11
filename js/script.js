const showBroweserWidth = () => {
    const width = window.innerWidth;

    document.querySelectorAll('#item').forEach(item => {
        // console.log(item.innerHTML);
        const hoverBox = item.querySelector('#hover-box');
        const text = item.querySelector('#text');

        if (width > 992) {
            text.classList.add('block');
            hoverBox.classList.add('hidden');

            item.addEventListener('mouseenter', () => {
                hoverBox.classList.remove('animate-down', 'hidden');
                hoverBox.classList.add('animate-up');
                text.classList.add('hidden');
            });

            item.addEventListener('mouseleave', () => {
                hoverBox.classList.remove('animate-up');
                hoverBox.classList.add('animate-down');

                setTimeout(() => {
                    hoverBox.classList.add('hidden');
                    text.classList.remove('hidden');
                }, 800);
            });
        } else {

            text.classList.add('hidden');
            hoverBox.classList.add('block');

            hoverBox.id = "new-hover-box";
            text.id = "new-text";

        }
    });

 
}

// window.onload = showBroweserWidth;
// window.onresize = showBroweserWidth;

// window.addEventListener('resize' , showBroweserWidth());
window.addEventListener('load' , showBroweserWidth());

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
// const homeLink = document.querySelector('.hvr[href="#Home"]'); // Select Home link

// Function to remove active styles from all aTags
function removeActiveStyles() {
    aTags.forEach(link => link.classList.remove('active', 'text-[#FF0000]'));
}

// Set Home as active initially
// homeLink.classList.add('active', 'text-[#FF0000]');

// Intersection Observer to track scrolling
const observer = new IntersectionObserver(entries => {
    // let anySectionVisible = false; // Track if any section is visible

    entries.forEach(entry => {
        const targetId = entry.target.getAttribute('id');
        const targetLink = document.querySelector(`.hvr[href="#${targetId}"]`);

        if (entry.isIntersecting) {
            removeActiveStyles();
            targetLink.classList.add('active', 'text-[#FF0000]');
            // anySectionVisible = true;
        }
    });

    // If no section is visible (e.g., scrolled to top), keep Home active
    // if (!anySectionVisible) {
    //     removeActiveStyles();
    //     homeLink.classList.add('active', 'text-[#FF0000]');
    // }
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
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
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
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

var swiper4 = new Swiper(".mySwiper4", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});



/*
// chatgpt----//

// const showBroweserWidth = () => {
//     const width = window.innerWidth;
//     console.log(width);

//     document.querySelectorAll('#item').forEach(item => {
//         const hoverBox = item.querySelector('#hover-box');
//         const text = item.querySelector('#text');

//         if (width > 992) {
//             text.classList.add('block');
//             hoverBox.classList.add('hidden');

//             item.addEventListener('mouseenter', () => {
//                 hoverBox.classList.remove('animate-down', 'hidden');
//                 hoverBox.classList.add('animate-up');
//                 text.classList.add('hidden');
//             });

//             item.addEventListener('mouseleave', () => {
//                 hoverBox.classList.remove('animate-up');
//                 hoverBox.classList.add('animate-down');

//                 setTimeout(() => {
//                     hoverBox.classList.add('hidden');
//                     text.classList.remove('hidden');
//                 }, 800);
//             });
//         } else {

//             text.classList.add('hidden');
//             hoverBox.classList.add('block');

//             hoverBox.id = "new-hover-box";
//             text.id = "new-text";

//         }
//     });

// }

// window.onload = showBroweserWidth;
// window.onresize = showBroweserWidth;
*/

/* new chatgt

// const browserWidth = () => {
//     const width = window.innerWidth;

//     document.querySelectorAll('#item').forEach(item => {
//         const hoverBox = item.querySelector('#hover-box');
//         const text = item.querySelector('#text');

//         if (width > 992) {
//             // Large screens: Restore hover animation
//             text.classList.remove('hidden');
//             hoverBox.classList.add('hidden');

//             hoverBox.id = "hover-box";
//             text.id = "text";

//             // Add hover event listeners
//             item.addEventListener('mouseenter', () => {
//                 hoverBox.classList.remove('animate-down', 'hidden');
//                 hoverBox.classList.add('animate-up');
//                 text.classList.add('hidden');
//             });

//             item.addEventListener('mouseleave', () => {
//                 hoverBox.classList.remove('animate-up');
//                 hoverBox.classList.add('animate-down');

//                 setTimeout(() => {
//                     hoverBox.classList.add('hidden');
//                     text.classList.remove('hidden');
//                 }, 800);
//             });

//         } else {
//             // Small screens: Show hoverBox, hide text (no animation)
//             text.classList.add('hidden');
//             hoverBox.classList.add('block');

//             // Remove hover animations (if any were applied before resizing)
//             hoverBox.classList.remove('animate-up', 'animate-down', 'hidden');
//             text.classList.remove('block');

//             // Assign new IDs
//             hoverBox.id = "new-hover-box";
//             text.id = "new-text";
//         }
//     });
// };

// // Run on page load and resize
// window.addEventListener('load', browserWidth);
// window.addEventListener('resize', browserWidth);

*/