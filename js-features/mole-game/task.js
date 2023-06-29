function getHole(index) {
    return document.getElementById('hole' + index)
};
let hole = 0;
let deadCounter = document.getElementById('dead');
let lostCounter = document.getElementById('lost');
let deadCount = 0;
let lostCount = 0;
for (let i = 1; i < 10; i++) {
    hole = getHole([i]);
    if (hole.classList.contains( 'hole_has-mole' ) == true) {
        hole.onclick = function() {
            deadCount += 1;
            deadCounter.textContent = deadCount;
        }
     } else {
        hole.onclick = function() {
            lostCount += 1;
            lostCounter.textContent = lostCount;
        }
    }
}     