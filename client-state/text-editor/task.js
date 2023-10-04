const text = localStorage.getItem('text');
let textarea = document.getElementById('editor');
console.log(localStorage.getItem('text'))
if (text) {
    textarea.value = text;
}
function setLocalStorage(key, content) {
    localStorage.setItem(key, content)
}




textarea.addEventListener('change', () => {
    if (textarea.value != '') {
        localStorage.clear();
        setLocalStorage('text', textarea.value)
    }
}) 
    
