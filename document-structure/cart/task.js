const products = document.querySelector('.products')
const cart = document.querySelector('.cart__products')
const attrs = [];


products.addEventListener('click', clickBtn);
products.addEventListener('click', addCount);
products.addEventListener('click', takeCount);

function clickBtn(event) {
    if ((event.target.closest('.product__add'))) {
        const activeBtn = event.target;
        const img = activeBtn.closest('.product__controls').previousElementSibling;
        const tempElem = document.createElement('div');
        tempElem.classList.add('cart__product');
        tempElem.setAttribute('data-id', `${activeBtn.closest('.product').dataset.id}`)
        attrs.push(activeBtn.closest('.product').dataset.id)
        tempElem.innerHTML = `<img class="cart__product-image" src="${img.src}">
        <div class="cart__product-count">${activeBtn.closest('.product__controls').firstElementChild.childNodes[3].childNodes[3].textContent}</div>`
        cart.append(tempElem);
    }
}
const count = document.querySelectorAll('.product__quantity-control')

function addCount(event) {
    if (event.target.closest('.product__quantity-control_inc')) {
        event.target.previousElementSibling.textContent = parseInt(event.target.previousElementSibling.textContent) + 1;
    }
}

function takeCount(event) {
        if ((event.target.closest('.product__quantity-controls').firstElementChild.nextElementSibling.textContent <= '1') && (event.target.closest('.product__quantity-control_dec'))) {
            return
        }
        else if (event.target.closest('.product__quantity-control_dec')) {
            event.target.nextElementSibling.textContent = parseInt(event.target.nextElementSibling.textContent - 1)
    }
}