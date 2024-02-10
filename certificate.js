
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
const title = document.querySelector('.main-title1');
const image = document.querySelector('.image-h3');

let count = 1;
function incrementCounter() {
    if (count < 3){
      count++;
      document.getElementById('span_1').innerText = count;
    }
 
}

function minusCounter() {   
 if( count > 1) {
      count--; 
      document.getElementById('span_1').innerText = count; 
 }
}



window.addEventListener("load", initSlider);

