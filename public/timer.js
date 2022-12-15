let workTittle = document.getElementById('works');
let breakTittle = document.getElementById('breaks');

let workTime = 25;
let breakTime = 5;

let seconds = "00"

var s = document.getElementById("audio");

// display
window.onload = () => {
    document.getElementById('min').innerHTML = workTime;
    document.getElementById('sec').innerHTML = seconds;

}

// start timer
function start() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    workTittle.classList.add('active');

    // change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('min').innerHTML = workMinutes;
        document.getElementById('sec').innerHTML = seconds;

        // start
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1 ){
                
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++
                    seconds = 59;
                    s.play();
                    // change the painel
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                if(breakCount == 2) {
                    // continue work
                    s.play();
                    setTimeout(function() {location.reload();}, 1500);
                    
                    breakCount = 0;

                    // change the painel
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }

            }
            seconds = 59;
        }
    }

    // start countdown
    setInterval(timerFunction, 1000); // 1000 = 1s
}

