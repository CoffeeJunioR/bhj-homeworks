'use strict';
let value = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let arrayForLinks = Array.from(document.querySelectorAll('.dropdown__link'));

function openMenu() {
        if (!list.classList.contains('dropdown__list_active')) {
        list.classList.add('dropdown__list_active')
        } else {
            list.classList.remove('dropdown__list_active')
        }
};
    value.addEventListener('click', openMenu);
    arrayForLinks.forEach(function (item) {
        item.onclick = function () {
            value.textContent = item.textContent;
            return false;
        };
        item.addEventListener('click', openMenu);
    })