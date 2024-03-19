var con = document.querySelector("#container")
var love = document.querySelector('i');

con.addEventListener("dblclick",heartAnimation);

// const likeBtn = document.getElementById('likeBtn');
// likeBtn.addEventListener('click',(e) =>{
//     likeBtn.classList.add('active')
// })

// -------------------------
const countBtn = document.getElementById('countBtn');



countBtn.addEventListener('click',heartAnimation);
const count = document.getElementById('count');


 function heartAnimation(e) {
    countBtn.classList.toggle( "active" );
    if(countBtn.classList.contains("active")){
        love.style.transform = "translate(-50%, -50%) scale(1)";
        love.style.opacity = 0.8;
        setTimeout(function () {
            love.style.opacity = 0;
        }, 1000)
        setTimeout(function () {
            love.style.transform = "translate(-50%, -50%) scale(0)";
        }, 2000)
        // console.log(true)
        count.innerHTML = 21;
    }else{ 
        // console.log(false)
        count.innerHTML = 20;
    }
}