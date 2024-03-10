// window.onload = function () {
//     var seconds = 00;
//     var tens = 00;
//     var appendTens = document.getElementById("tens");
//     var appendSeconds = document.getElementById("seconds")
//     var buttonstart = document.getElementById("button-start")
//     var buttonstop = document.getElementById("button-stop")
//     var buttonreset = document.getElementById("button-reset")
//     var Interval;

//     buttonstart.onclick = function () {
//         Interval = setInterval(startTimer, 10);
//     }

//     buttonstop.onclick = function(){
//         clearInterval(Interval);
//     }

//     buttonreset.onclick = function(){
//         clearInterval(Interval);
//         tens = '00';
//         seconds = "00";
//         appendTens.innerHTML = tens;
//         appendSeconds.innerHTML = seconds;
//     }
//     function startTimer() {
//         tens++;;
//         if (tens <= 9) {
//             appendTens.innerHTML = "0" + tens;
//             console.log(tens + "One");
//         }

//         if (tens > 9) {
//             appendTens.innerHTML = tens;
//             console.log(tens + "Two");
//         }

//         if (tens > 99) {

//             console.log(tens + "Third");
//             seconds++;
//             appendSeconds.innerHTML = "0" + seconds;
//             tens = 0;
//             appendTens.innerHTML = "0" + 0;
//         }

//         if (tens > 9) {
//             appendSeconds.innerHTML = seconds;
//             console.log(tens + "Four");
//         }

//     }
// }

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("button-start").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("button-pause").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("button-reset").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
}); 

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

}
