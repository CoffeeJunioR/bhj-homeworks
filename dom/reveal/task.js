'use strict';

window.addEventListener('scroll', event => {
    const message = document.querySelectorAll('div.reveal')
    const firstReveal = message[0];
    const secondReveal = message[1];
    const massageTopX = firstReveal.getBoundingClientRect().top;
    const massageBottomX = firstReveal.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;
    const condition = (massageTopX < (viewportHeight / 1.5) & massageBottomX >= (viewportHeight / 4))
    condition ? firstReveal.classList.add('reveal_active') : firstReveal.classList.remove('reveal_active');

    const massageTop = secondReveal.getBoundingClientRect().top;
    const massageBottom = secondReveal.getBoundingClientRect().bottom;
    const conditionSec = (massageTop < (viewportHeight / 1.5) & massageBottom >= (viewportHeight / 4))
    conditionSec ? secondReveal.classList.add('reveal_active') : secondReveal.classList.remove('reveal_active');
})
