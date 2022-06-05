let intro = document.querySelector('.intro');
let text = document.querySelector('welcome-header');
let textSpan = document.querySelector('.welcome-text');

window.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(()=>{

        setTimeout(()=>{
            textSpan.classList.add('active');
        }, 400)

        setTimeout(()=>{
            setTimeout(()=>{
                textSpan.classList.remove('active');
                textSpan.classList.add('fade');
            }, 50)
        },2000);

        setTimeout(() => {
           intro.style.top = '-100vh'; 
        }, 2300);


    })
})