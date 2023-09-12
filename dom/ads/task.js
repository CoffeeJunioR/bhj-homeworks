const rotators = Array.from(document.getElementsByClassName('rotator__case'))
function isActiveRotator(e, i, array) {
    return e.classList.contains('rotator__case_active');
}

function setNewRotatorIndex(currentRotator) {
    return (currentRotator === rotators.length - 1) ? 0: ++currentRotator;
}

function rotatorClassChange(rotator) {
    rotator.classList.toggle('rotator__case_active');
}

setInterval(function () {
    let currentRotator = rotators.findIndex(isActiveRotator);
    let newRotator = setNewRotatorIndex(currentRotator);
    rotatorClassChange(rotators[currentRotator]);
    rotatorClassChange(rotators[newRotator]);}, 1000)
