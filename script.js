var copy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);




let index = 0;
const slides = document.querySelector('.slides');
const slideCount = slides.children.length;
const slideWidth = document.querySelector('.clients').clientWidth;
  
function moveSlide(direction) {
    index += direction;

    if (index < 0){
        index = slideCount - 1;
    }

    if (index >=slideCount) {
        index = 0;
    }

    slides.style.transform = `translateX(-${index * slideWidth}px)`;

} 