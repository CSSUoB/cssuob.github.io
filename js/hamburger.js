document.addEventListener('DOMContentLoaded', () => {
    console.log('here');
    let hamburger = document.getElementById('hamburger');
    let menu = document.getElementById('hamburger-menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('visible');
    });

    menu.addEventListener('click', () => {
        menu.classList.toggle('visible');
    });
});