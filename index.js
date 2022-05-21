let collapsibles = document.querySelector('.collapsible');
let navBars = document.querySelector('.nav__bars');

navBars.addEventListener('click', () => {
    collapsibles.classList.toggle('collapsible--expanded');
});

const showAllTab = document.querySelector('.all')
const forKids = document.querySelector('.kid')
const forMen = document.querySelector('.men')
const forWomen = document.querySelector('.women')
const accessories = document.querySelector('.accessories')

const allFilteredCards = document.querySelectorAll('.filtered-card')

const allFilteredCardsArray = Array.from(allFilteredCards)

showAllTab.addEventListener('click', showAll)
function showAll() {
    allFilteredCardsArray.forEach(div => {
        div.classList.remove('remove')
        div.classList.add('show')
    })
}

forKids.addEventListener('click', showKidsClothes)
function showKidsClothes() {
    allFilteredCardsArray.forEach(div => {
        div.classList.remove('remove')

        if (!div.dataset.kids) {
            div.classList.add('remove')
        }
    })
}

forMen.addEventListener('click', showMensClothes)
function showMensClothes() {
    allFilteredCardsArray.forEach(div => {
        div.classList.remove('remove')

        if (!div.dataset.men) {
            div.classList.add('remove')
        }
    })
}