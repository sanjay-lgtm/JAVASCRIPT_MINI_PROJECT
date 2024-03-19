const countBtn = document.getElementById('countBtn');



countBtn.addEventListener('click',(e) =>{
    countBtn.classList.toggle( "active" );
    if(countBtn.classList.contains("active")){
        console.log(true)
        count.innerHTML = 21;
    }else{
        console.log(false)
        count.innerHTML = 20;
    }
    
})

const count = document.getElementById('count');

