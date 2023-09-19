const products = document.querySelector('.products')

products.addEventListener('click', clickBtn);
products.addEventListener('click', addCount);
products.addEventListener('click', takeCount);

function clickBtn(event) {
    if (event.target.closest('.product__add')) {
        const cart = document.querySelector('.cart__products')
        const activeBtn = event.target;
        const img = activeBtn.closest('.product__controls').previousElementSibling;
        console.log(img)
        console.log(activeBtn.closest('.product__controls').firstElementChild.childNodes[3].childNodes[3])
        cart.innerHTML = `<div class="cart__product" data-id="${activeBtn.closest('.product').dataset.id}">
        <img class="cart__product-image" src="${img.src}">
        <div class="cart__product-count">${activeBtn.closest('.product__controls').firstElementChild.childNodes[3].childNodes[3].textContent}</div>
    </div>`
        
    }
}
const count = document.querySelectorAll('.product__quantity-control')

function addCount(event) {
    if (event.target.closest('.product__quantity-control_inc')) {
        event.target.previousElementSibling.textContent = parseInt(event.target.previousElementSibling.textContent) + 1;
    }
}

function takeCount(event) {
        if ((event.target.closest('.product__quantity-value') == 1) && (event.target.closest('.product__quantity-value'))) {
            return;
        
        }
        else if (event.target.closest('.product__quantity-control_dec')) {
            console.log(event.target.closest('.product__quantity-control_dec').nextElementSibling.textContent)
            event.target.nextElementSibling.textContent = parseInt(event.target.nextElementSibling.textContent - 1)
    }
}