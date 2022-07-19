const img = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quis in voluptate sunt quam, nihil, laudantium ducimus ab vitae debitis adipisci.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nesciunt dolore harum nam? Doloremque in qui ipsa mollitia dolorum aut.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint repudiandae nobis nam voluptas placeat doloribus fugit.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis suscipit cumque sequi maiores beatae perferendis, quas id? Rem labore aut totam culpa illum.'
    }
];

let items = document.querySelector('.items');
let thumb = document.querySelector('.thumb');

items.innerHTML = `
    <div class="item-img show">
        <img class="main-img" src="${img[0].url}">
        <div class="item-txt">
            <h2>${img[0].title}</h2>
            <p>${img[0].description}</p>
        </div>
    </div>
    `;
for (let i = 1; i < img.length; i++) {
    items.innerHTML += `
    <div class="item-img">
        <img class="main-img" src="${img[i].url}">
        <div class="item-txt">
            <h2>${img[i].title}</h2>
            <p>${img[i].description}</p>
        </div>
    </div>
    `;
}

thumb.innerHTML += `<div class="thumb-img"><img class="sec-img active" src="${img[0].url}"></div>`;
for (let i = 1; i < img.length; i++) {
    thumb.innerHTML += `<div class="thumb-img"><img class="sec-img" src="${img[i].url}"></div>`;
}

thumb.innerHTML += `<div id="arrow-left"><i class="fa-solid fa-circle-chevron-left"></i></div>`;
thumb.innerHTML += `<div id="arrow-right"><i class="fa-solid fa-circle-chevron-right"></i></div>`;

items.innerHTML += `
    <div id="autoplay-container">
        <i id="reverse-btn" class="fa-solid fa-circle-play"></i>
        <i id="pause-btn" class="fa-solid fa-circle-pause"></i>
        <i id="play-btn" class="fa-solid fa-circle-play"></i>
    </div>
    `;
items.innerHTML += `<div id="play-btn"><i class="fa-solid fa-circle-play"></i></div>`;
items.innerHTML += `<div id="pause-btn"><i class="fa-solid fa-circle-play"></i></div>`;

console.log(`INFO: Possibilità di cliccare sui singoli thumb e scorrimento infinito attraverso le frecce della tastiera o cliccando sui bottoni.`)



const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
let imgMain = document.querySelectorAll('.item-img');
let imgSec = document.querySelectorAll('.sec-img');
const imgThumb = document.getElementsByClassName('sec-img');

///////////////////////////////// CHECK THIS ********
let imgSelected = [0, 1, 2, 3, 4];
for (let i = 0; i < imgSelected.length; i++) {
    imgSelected = i;
}

for (let n = 0; n < imgThumb.length; n++) {
    imgThumb[n].addEventListener('click', 
    function() {

        for (let x = 0; x < img.length; x++) {
            imgMain[x].classList.remove('show');
            imgMain[x].classList.add('no-show');
            imgSec[x].classList.remove('active');
        }

        imgMain[n].classList.add('show');
        imgMain[n].classList.remove('no-show');
        imgSec[n].classList.remove('active');

        this.classList.toggle('active')

        imgSelected = n;
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



let autoplay = undefined;

if (autoplay == undefined) {
    autoplay = setInterval(function() {
        keybtnRight();
    
        autoplay = undefined;
    }, 3000);
}




function keybtnRight() {
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