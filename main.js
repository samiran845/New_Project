const swipe = document.getElementById('swipe');
const container = document.querySelector('.container');

swipe.addEventListener('change',()=>{
    if(swipe.value == 100){
        container.classList.remove('dispay--none')
    }
})