
    const initSlider = () =>{
        const imageList = document.querySelector('.slider-wrapper .image-list');
        const slideButtons = document.querySelectorAll('.slider-wrapper .slide-button');
        slideButtons.forEach(button =>{
            button.addEventListener("click", () => {
                const direction = button.id === "prev-slide" ? -1 : 1;
                const scrollAmount = imageList.clientWidth * direction;
                imageList.scrollBy({left:scrollAmount, behavior: "smooth"});
            })
        })
    };

    const button1 = document.querySelector('.two-btn')
    const button2 = document.querySelector('.one-btn')
    const span = document.getElementById('span_1');
    const span1 = document.getElementById('span_2');
    const title = document.querySelector('.main-title1');
    


    button1.addEventListener('click', () =>{
        if(true){
            span.innerHTML = 1;
            title.innerHTML = "ნურთაუნი";
        } 
    });
    button2.addEventListener('click', () =>{
        if(true){
            span.innerHTML = 2;
            title.innerHTML = "ბეჰანსი";
        } 
    });


    
window.addEventListener("load", initSlider);


let headerBurger = document.querySelector('.header_burger');
let menu = document.querySelector('.menu');
let body = document.querySelector('body')
headerBurger.onclick = function(){
    headerBurger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('no-scroll')
}