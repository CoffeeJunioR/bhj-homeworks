const text = localStorage.getItem('text');
let textarea = document.getElementById('editor');
textarea.value = text;
function setLocalStorage(key, content) {
    localStorage.setItem(key, content)
}




textarea.addEventListener('input', () => {
    if (textarea.value != '') {
        setLocalStorage('text', textarea.value)
    }
}) 
    
