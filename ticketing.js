const showBroweserWidth = () => {
    const width = window.innerWidth;

    document.querySelectorAll('#item').forEach(item => {
        const hoverBox = item.querySelector('#hover-box');
        const text = item.querySelector('#text');

        if (width > 1080) {
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

window.onload = showBroweserWidth;
window.onresize = showBroweserWidth;