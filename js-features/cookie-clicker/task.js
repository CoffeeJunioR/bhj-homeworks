let img = document.getElementById('cookie');
let clickCounter = document.getElementById('clicker__counter');
clickCounter.textContent = 0;
let clicks = 0;
img.onclick = function() {
    clicks +=1;
    clickCounter.textContent = clicks;
    if (clickCounter.textContent % 2 != 0) {
        img.width = 400;
    } else {
        img.width = 200;
    }
}