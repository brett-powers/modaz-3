let collapsibles = document.querySelector('.collapsible');
let navBars = document.querySelector('.nav__bars');

navBars.addEventListener('click', () => {
    collapsibles.classList.toggle('collapsible--expanded');
});