const img = [
    'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg', 
    'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg', 
    'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c', 
    'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg', 
    'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop', 
];

let items = document.querySelector('.items');
let thumb = document.querySelector('.thumb');

items.innerHTML = `<div class="item-img show"><img class="main-img" src="${img[0]}"></div>`;
for (let i = 1; i < img.length; i++) {
    items.innerHTML += `<div class="item-img"><img class="main-img" src="${img[i]}"></div>`;
}

thumb.innerHTML += `<div class="thumb-img"><img class="sec-img active" src="${img[0]}"></div>`;
for (let i = 1; i < img.length; i++) {
    thumb.innerHTML += `<div class="thumb-img"><img class="sec-img" src="${img[i]}"></div>`;
}

thumb.innerHTML += `<div id="arrow-left"><i class="fa-solid fa-circle-chevron-left"></i></div>`;
thumb.innerHTML += `<div id="arrow-right"><i class="fa-solid fa-circle-chevron-right"></i></div>`;



console.log(`INFO: Possibilità di cliccare sui singoli thumb e scorrimento infinito attraverso le frecce della tastiera o cliccando sui bottoni.`)

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
let imgMain = document.querySelectorAll('.item-img');
let imgSec = document.querySelectorAll('.sec-img');

let imgSelected = [0, 1, 2, 3, 4];
const imgThumb = document.getElementsByClassName('sec-img');
let clicked;

for (let n = 0; n < imgThumb.length; n++) {
    imgThumb[n].addEventListener('click', 
    function() {
        clicked = parseInt([n]);

        for (let i = 0; i < imgSelected.length; i++) {
            imgSelected = parseInt([i]);
        }

        imgMain[imgSelected].classList.remove('show');
        imgSec[imgSelected].classList.remove('active');
        imgMain[imgSelected].classList.add('no-show');

        if (clicked == 0) {
            imgMain[0].classList.add('show');
            imgSec[0].classList.add('active');
            imgMain[0].classList.remove('no-show');

        } else if (clicked == 1) {
            imgMain[1].classList.add('show');
            imgSec[1].classList.add('active');
            imgMain[1].classList.remove('no-show');

        } else if (clicked == 2) {
            imgMain[2].classList.add('show');
            imgSec[2].classList.add('active');
            imgMain[2].classList.remove('no-show');

        } else if (clicked == 3) {
            imgMain[3].classList.add('show');
            imgSec[3].classList.add('active');
            imgMain[3].classList.remove('no-show');

        } else if (clicked == 4) {
            imgMain[4].classList.add('show');
            imgSec[4].classList.add('active');
            imgMain[4].classList.remove('no-show');
        }

        imgSelected = clicked;
    });
}

arrowRight.addEventListener('click', 
function() {
    keybtnRight();
});

arrowLeft.addEventListener('click', 
function() {
    keybtnLeft();
});

document.querySelector("body").addEventListener("keydown", 
function(event) {
    switch (event.key) {
        case "ArrowRight":
            keybtnRight();
        break;

        case "ArrowLeft":
            keybtnLeft();
        break;
    }
});



function keybtnRight() {
    for (let i = 0; i < imgSelected.length; i++) {
        imgSelected = parseInt([i]);
    }

    imgMain[imgSelected].classList.remove('show');
    imgSec[imgSelected].classList.remove('active');
    imgMain[imgSelected].classList.add('no-show');

    if (imgSelected == img.length - 1) {
        imgSelected = 0;

    } else if (imgSelected >= 0) {
        imgSelected++;
    }

    imgMain[imgSelected].classList.remove('no-show');
    imgMain[imgSelected].classList.add('show');
    imgSec[imgSelected].classList.add('active');
}

function keybtnLeft() {
    for (let i = 0; i < imgSelected.length; i++) {
        imgSelected = parseInt([i]);
    }

    imgMain[imgSelected].classList.remove('show');
    imgSec[imgSelected].classList.remove('active');
    imgMain[imgSelected].classList.add('no-show');

    if (imgSelected == 0) {
        imgSelected = img.length - 1;

    } else if (imgSelected > 0) {
        imgSelected--;
    }

    imgMain[imgSelected].classList.remove('no-show');
    imgMain[imgSelected].classList.add('show');
    imgSec[imgSelected].classList.add('active');
}