const tooltipArray = document.querySelectorAll('.has-tooltip');
const tooltipTitle = [];
for (let i = 0; i < tooltipArray.length; i++) {
    tooltipTitle.push(tooltipArray[i].title);
    tooltipArray[i].removeAttribute('title');
    tooltipArray[i].href = '#0';
}
for (let i = 0; i < tooltipArray.length; i++) {
    document.querySelector('.has-tooltip').addEventListener('click', () => {
        tooltipArray[i].insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active">${tooltipTitle[i]}</div>`)
    })
}

