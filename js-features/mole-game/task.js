function getHole(index) {
    return document.getElementById('hole' + index)
};
let deadCounter = document.getElementById('dead');
let lostCounter = document.getElementById('lost');
let deadCount = 0;
let lostCount = 0;
function resetGame() {
    lostCount = 0;
    lostCounter.textContent = lostCount;
    deadCount = 0
    deadCounter.textContent = deadCount;
}
for (let i = 1; i < 10; i++) {
    let hole = getHole([i]);
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            deadCount += 1;
            deadCounter.textContent = deadCount;
        } else {
            lostCount += 1;
            lostCounter.textContent = lostCount;
        }
        if ((deadCount == 10) && (!(lostCount >= 5))) {
            alert('Вы победили!');
            resetGame();
        } else if (lostCount >=5) {
            alert('Вы проиграли :(');
            resetGame();
        }
    }
}