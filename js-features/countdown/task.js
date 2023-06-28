// 1 задача
const timer = document.getElementById('timer')
const tick = function() {
    if (timer.textContent > 0) {
    timer.textContent -=1
    } else if (timer.textContent == 0) {
        alert('Вы победили в конкурсе!')
        clearInterval(interval)
        
    }
};



let interval = setInterval(tick, 1000)

// 1 задача(1 повышенный уровень)
let timer2 = document.getElementById('timer2');
let seconds = Number(timer2.textContent[6] + timer2.textContent[7]);
let minutes = Number(timer2.textContent[3] + timer2.textContent[4]);
let hours = Number(timer2.textContent[0] + timer2.textContent[1]);
console.log(timer2.textContent);
const tick2 = function() {
    if ((seconds === 0) && (minutes === 0) && (hours === 0)){
        alert('Вы победили в конкурсе!');
        clearInterval(interval2)
    } else if ((seconds === 0) && (minutes === 0) && (hours > 0)) {
        hours -= 1;
        minutes = 59;
        seconds = 59;
        timer2.textContent = hours + ':' + minutes + ':' + seconds ;
    } else if ((seconds === 0) && (minutes > 0)){
        minutes -= 1;
        seconds = 59;
        timer2.textContent = hours + ':' + minutes + ':' + seconds
    } else if (seconds > 0) {
        seconds -= 1;
        timer2.textContent = hours + ':' + minutes + ':' + seconds
    }
      
};



let interval2 = setInterval(tick2, 1000);