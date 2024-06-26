const nav = document.querySelector('.content')
const hamburgerButton = nav.querySelector('#menu')
const ul = nav.querySelector('ul')

const toggleNav = function() {
        nav.classList.toggle('active')
        const expanded = nav.classList.contains('active')
        hamburgerButton.setAttribute('aria-expanded', expanded)
        ul.classList.toggle('visible', expanded)
        ul.classList.toggle('hidden', !expanded)
    }

export const initialiseerToggleNav = function() {
    hamburgerButton.addEventListener('click', toggleNav)
}

export const checkWindowSize = function() {
    const minWidth = 768
    const expanded = nav.classList.contains('active')

    if (window.innerWidth > minWidth) {
        ul.classList.remove('visible')
        ul.classList.remove('hidden')
    } else {
        ul.classList.toggle('visible', expanded)
    }


}