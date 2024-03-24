const textarea = document.getElementById('myTextarea');
const button = document.querySelector('.btn')
const bgText = document.querySelector('.bg-text');
// const circle = document.querySelector('.clipPath-circle')
let newColor;
button.addEventListener('click', (e) => {
    e.preventDefault();
    newColor = document.querySelector('.newColor-input').value;
    textarea.style.background = newColor;
    // circle.style.background = newColor;
    // circle.classList.add('active');
    // bgText.innerText = newColor
})


function saveToLocalStorage() {
    localStorage.setItem("savedText", textarea.value);
}

if (localStorage.getItem("savedText")) {
    textarea.value = localStorage.getItem("savedText");

}

textarea.addEventListener("input", saveToLocalStorage);

let progress = document.getElementById('progress')
let song = document.getElementById('song')
let ctrlIcon = document.getElementById('ctrlIcon')
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;

}
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play")
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play")
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play")
}


// ----------toggle-------------------------

// let SliderBtn = document.getElementById('sliderBtn');
// let textArea = document.getElementById('myTextarea');
// let textContianer = document.getElementByClassName('textContainer')
// SliderBtn.addEventListener('change', (e) => {
//     if (SliderBtn.checked) {
//         console.log("checked")
//         textContianer[0].classList.add('hidden')
//         textArea.classList.add('hidden')


//         //    textArea.style.display = "none"

//     } else {

//     }
// });

let SliderBtn = document.getElementById('sliderBtn');
let textArea = document.getElementById('myTextarea');
let textContainer = document.getElementsByClassName('textContainer'); // Corrected method name
let canVas = document.getElementById('canvas');
let navBar = document.getElementsByClassName('nav')
let inputGroup = document.getElementsByClassName('input-group')
SliderBtn.addEventListener('change', (e) => {
    if (SliderBtn.checked) {
        console.log("checked");
        canVas.classList.remove('hidden');
        navBar[0].classList.remove('hidden')
        inputGroup[0].classList.add('hidden')
        if (textContainer.length > 0) {

            textContainer[0].classList.add('hidden');
        }
        if (textArea) {
            textArea.classList.add('hidden');
        }
    } else {
        console.log("unchecked");
        canVas.classList.add('hidden')
        navBar[0].classList.add('hidden')
        inputGroup[0].classList.remove('hidden')
        if (textContainer.length > 0) {
            textContainer[0].classList.remove('hidden');
        }
        if (textArea) {
            textArea.classList.remove('hidden');
        }
    }
});


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx


let SliderBtnTwo = document.getElementById('sliderBtntwo')
let game = document.getElementById('game')
let backGround = document.getElementsByClassName('background')
let messageBox = document.getElementsByClassName('message');
let score = document.getElementsByClassName('score');
let scoreTitle = document.getElementsByClassName('score_title');
let scoreVal = document.getElementsByClassName('score_val');

SliderBtnTwo.addEventListener('change', (e) => {
    if (SliderBtn.checked) {
        console.log("checked");
        game.classList.remove('hidden');
       
        inputGroup[0].classList.add('hidden')
        if (textContainer.length > 0) {

            textContainer[0].classList.add('hidden');
        }
        if (textArea) {
            textArea.classList.add('hidden');
        }
    } else {
        console.log("unchecked");
        canVas.classList.add('hidden')
        navBar[0].classList.add('hidden')
        inputGroup[0].classList.remove('hidden')
        if (textContainer.length > 0) {
            textContainer[0].classList.remove('hidden');
        }
        if (textArea) {
            textArea.classList.remove('hidden');
        }
    }
});

// ----------------------for canvas----------------------------------
const canvas = document.getElementById("canvas")
const body = document.querySelector('body');
canvas.height = window.innerHeight
canvas.width = window.innerWidth
var theColor = '';
var lineW = 5;
let prevX = null
let prevY = null
let draw = false

// body.style.backgroundColor = "#FFFFFF";
var theInput = document.getElementById("favcolor");

theInput.addEventListener("input", function () {
    theColor = theInput.value;
    canvas.style.backgroundColor = theColor;
}, false);

const ctx = canvas.getContext("2d")
ctx.lineWidth = lineW;

document.getElementById("ageInputId").oninput = function () {
    draw = null
    lineW = document.getElementById("ageInputId").value;
    document.getElementById("ageOutputId").innerHTML = lineW;
    ctx.lineWidth = lineW;
};

let clrs = document.querySelectorAll(".clr")
clrs = Array.from(clrs)
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr
    })
})

let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png")
    let a = document.createElement("a")
    a.href = data
    a.download = "sketch.png"
    a.click()
})

window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)

window.addEventListener("mousemove", (e) => {
    if (prevX == null || prevY == null || !draw) {
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let currentX = e.clientX
    let currentY = e.clientY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY
})


// ----------------------game---------------------------------------------------------

let move_speed = 3, grativy = 0.5;
let bird = document.querySelector('.bird');
let img = document.getElementById('bird-1');
let sound_point = new Audio('sounds effect/point.mp3');
let sound_die = new Audio('sounds effect/die.mp3');

// getting bird element properties
let bird_props = bird.getBoundingClientRect();

// This method returns DOMReact -> top, right, bottom, left, x, y, width and height
let background = document.querySelector('.background').getBoundingClientRect();

let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let score_title = document.querySelector('.score_title');

let game_state = 'Start';
img.style.display = 'none';
message.classList.add('messageStyle');

document.addEventListener('keydown', (e) => {

    if (e.key == 'Enter' && game_state != 'Play') {
        document.querySelectorAll('.pipe_sprite').forEach((e) => {
            e.remove();
        });
        img.style.display = 'block';
        bird.style.top = '40vh';
        game_state = 'Play';
        message.innerHTML = '';
        score_title.innerHTML = 'Score : ';
        score_val.innerHTML = '0';
        message.classList.remove('messageStyle');
        play();
    }
});

function play() {
    function move() {
        if (game_state != 'Play') return;

        let pipe_sprite = document.querySelectorAll('.pipe_sprite');
        pipe_sprite.forEach((element) => {
            let pipe_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();

            if (pipe_sprite_props.right <= 0) {
                element.remove();
            } else {
                if (bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width && bird_props.left + bird_props.width > pipe_sprite_props.left && bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height && bird_props.top + bird_props.height > pipe_sprite_props.top) {
                    game_state = 'End';
                    message.innerHTML = 'Game Over'.fontcolor('red') + '<br>Press Enter To Restart';
                    message.classList.add('messageStyle');
                    img.style.display = 'none';
                    sound_die.play();
                    return;
                } else {
                    if (pipe_sprite_props.right < bird_props.left && pipe_sprite_props.right + move_speed >= bird_props.left && element.increase_score == '1') {
                        score_val.innerHTML = + score_val.innerHTML + 1;
                        sound_point.play();
                    }
                    element.style.left = pipe_sprite_props.left - move_speed + 'px';
                }
            }
        });
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move);

    let bird_dy = 0;
    function apply_gravity() {
        if (game_state != 'Play') return;
        bird_dy = bird_dy + grativy;
        document.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowUp' || e.key == ' ') {
                img.src = 'images/Bird-2.png';
                bird_dy = -7.6;
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.key == 'ArrowUp' || e.key == ' ') {
                img.src = 'images/Bird.png';
            }
        });

        if (bird_props.top <= 0 || bird_props.bottom >= background.bottom) {
            game_state = 'End';
            message.style.left = '28vw';
            window.location.reload();
            message.classList.remove('messageStyle');
            return;
        }
        bird.style.top = bird_props.top + bird_dy + 'px';
        bird_props = bird.getBoundingClientRect();
        requestAnimationFrame(apply_gravity);
    }
    requestAnimationFrame(apply_gravity);

    let pipe_seperation = 0;

    let pipe_gap = 35;

    function create_pipe() {
        if (game_state != 'Play') return;

        if (pipe_seperation > 115) {
            pipe_seperation = 0;

            let pipe_posi = Math.floor(Math.random() * 43) + 8;
            let pipe_sprite_inv = document.createElement('div');
            pipe_sprite_inv.className = 'pipe_sprite';
            pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
            pipe_sprite_inv.style.left = '100vw';

            document.body.appendChild(pipe_sprite_inv);
            let pipe_sprite = document.createElement('div');
            pipe_sprite.className = 'pipe_sprite';
            pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
            pipe_sprite.style.left = '100vw';
            pipe_sprite.increase_score = '1';

            document.body.appendChild(pipe_sprite);
        }
        pipe_seperation++;
        requestAnimationFrame(create_pipe);
    }
    requestAnimationFrame(create_pipe);
}