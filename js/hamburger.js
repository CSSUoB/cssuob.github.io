document.addEventListener('DOMContentLoaded', () => {
    let hamburger = document.getElementById('hamburger');
    let menu = document.getElementById('hamburger-menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('visible');
    });

    menu.addEventListener('click', (event) => {
        if (event.target == menu) {
            menu.classList.toggle('visible');
        }
    });
});