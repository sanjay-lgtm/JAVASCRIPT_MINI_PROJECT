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
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play")
    }else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play")
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play")
}