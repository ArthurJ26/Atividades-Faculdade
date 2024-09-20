const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlide() {
    slider[currentSlide].classList.add('on')
}

function nextSlide() {
    hideSlider()
    if(currentSlide === slider.length -1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlide()
}

function prevSlide() {
    hideSlider()
    if(currentSlide === 0) {
        currentSlide = slider.length - 1
    } else {
        currentSlide--
    }
    showSlide()
}


btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)

// Brigadeiro

const slider1 = document.querySelectorAll('.slider1');
const btnPrev1 = document.getElementById('prev-button1');
const btnNext1 = document.getElementById('next-button1');

let currentSlide1 = 0;

function hideSlider1() {
    slider1.forEach(item => item.classList.remove('on'))
}

function showSlide1() {
    slider1[currentSlide1].classList.add('on')
}

function nextSlide1() {
    hideSlider1()
    if(currentSlide1 === slider1.length -1) {
        currentSlide1 = 0
    } else {
        currentSlide1++
    }
    showSlide1()
}

function prevSlide1() {
    hideSlider1()
    if(currentSlide1 === 0) {
        currentSlide1 = slider1.length - 1
    } else {
        currentSlide1--
    }
    showSlide1()
}


btnNext1.addEventListener('click', nextSlide1)
btnPrev1.addEventListener('click', prevSlide1)

// taça

const slider2 = document.querySelectorAll('.slider2');
const btnPrev2 = document.getElementById('prev-button2');
const btnNext2 = document.getElementById('next-button2');

let currentSlide2 = 0;

function hideSlider2() {
    slider2.forEach(item => item.classList.remove('on'))
}

function showSlide2() {
    slider2[currentSlide2].classList.add('on')
}

function nextSlide2() {
    hideSlider2()
    if(currentSlide2 === slider2.length -1) {
        currentSlide2 = 0
    } else {
        currentSlide2++
    }
    showSlide2()
}

function prevSlide2() {
    hideSlider2()
    if(currentSlide2 === 0) {
        currentSlide2 = slider2.length - 1
    } else {
        currentSlide2--
    }
    showSlide2()
}


btnNext2.addEventListener('click', nextSlide2)
btnPrev2.addEventListener('click', prevSlide2)

// cupcake

const slider3 = document.querySelectorAll('.slider3');
const btnPrev3 = document.getElementById('prev-button3');
const btnNext3 = document.getElementById('next-button3');

let currentSlide3 = 0;

function hideSlider3() {
    slider3.forEach(item => item.classList.remove('on'))
}

function showSlide3() {
    slider3[currentSlide3].classList.add('on')
}

function nextSlide3() {
    hideSlider3()
    if(currentSlide3 === slider3.length -1) {
        currentSlide3 = 0
    } else {
        currentSlide3++
    }
    showSlide3()
}

function prevSlide3() {
    hideSlider3()
    if(currentSlide3 === 0) {
        currentSlide3 = slider3.length - 1
    } else {
        currentSlide3--
    }
    showSlide3()
}


btnNext3.addEventListener('click', nextSlide3)
btnPrev3.addEventListener('click', prevSlide3)

//tamanho e cobertura

const slider4 = document.querySelectorAll('.slider4');
const btnPrev4 = document.getElementById('prev-button4');
const btnNext4 = document.getElementById('next-button4');

let currentSlide4 = 0;

function hideSlider4() {
    slider4.forEach(item => item.classList.remove('on'))
}

function showSlide4() {
    slider4[currentSlide4].classList.add('on')
}

function nextSlide4() {
    hideSlider4()
    if(currentSlide4 === slider4.length -1) {
        currentSlide4 = 0
    } else {
        currentSlide4++
    }
    showSlide4()
}

function prevSlide4() {
    hideSlider4()
    if(currentSlide4 === 0) {
        currentSlide4 = slider4.length - 1
    } else {
        currentSlide4--
    }
    showSlide4()
}


btnNext4.addEventListener('click', nextSlide4)
btnPrev4.addEventListener('click', prevSlide4)

// pascoa

const slider5 = document.querySelectorAll('.slider5');
const btnPrev5 = document.getElementById('prev-button5');
const btnNext5 = document.getElementById('next-button5');

let currentSlide5 = 0;

function hideSlider5() {
    slider5.forEach(item => item.classList.remove('on'))
}

function showSlide5() {
    slider5[currentSlide5].classList.add('on')
}

function nextSlide5() {
    hideSlider5()
    if(currentSlide5 === slider5.length -1) {
        currentSlide5 = 0
    } else {
        currentSlide5++
    }
    showSlide5()
}

function prevSlide5() {
    hideSlider5()
    if(currentSlide5 === 0) {
        currentSlide5 = slider5.length - 1
    } else {
        currentSlide5--
    }
    showSlide5()
}


btnNext5.addEventListener('click', nextSlide5)
btnPrev5.addEventListener('click', prevSlide5)

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 100)
})

function actionToggle(){
    var action = document.querySelector('.action');
    action.classList.toggle('active')
}