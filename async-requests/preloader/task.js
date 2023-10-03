const xhr = new XMLHttpRequest();
const img = document.getElementById('loader');
const item = document.querySelector('.item')
item.style.display = 'block'

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        img.classList.remove('loader_active')
        const itemCodes = [];
        const itemValues = [];
        const itemCode = [];
        const valutes = xhr.response.response.Valute;
        itemCodes.push(Object.entries(valutes));
        console.log(itemCodes);
        for (let i = 0; i <= itemCodes[0].length - 1; i++) {
            itemValues.push(itemCodes[0][i][1].Value);
            itemCode.push(itemCodes[0][i][1].CharCode);
            console.log(itemCode)
            item.insertAdjacentHTML('afterbegin', `<div class="item__info" style="display: flex;"><div class="item__code">
            ${itemCode[i]}
        </div>
        <div class="item__value">
            ${itemValues[i]}
        </div>
        <div class="item__currency">
            руб.
        </div></div>`
        )
        }

    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.responseType = 'json';
