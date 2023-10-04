const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
    }
    }
    console.log(getCookie('popup'))
if (!(getCookie('popup') === 'closed')) {
    setTimeout(() => {
        popup.classList.add('modal_active')
    }, 2)
}
const popup = document.getElementById('subscribe-modal')
const popupClose = document.querySelector('.modal__close')

popupClose.addEventListener('click', () => {
    popup.classList.remove('modal_active')
    const name = 'popup';
    const value = 'closed'
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + '; max-age=2629743';
})


