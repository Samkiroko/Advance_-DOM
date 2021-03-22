'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const allButtons = document.getElementsByTagName('button');
const message = document.createElement('div');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
///////////////////////////////////////

// Modal window

const openModal = function(e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

//////////////////////////

// scroll effect

btnScrollTo.addEventListener('click', e => {
    section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////
// page Navigation

document.querySelectorAll('.nav__link').forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
    });
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
    // match strategy
    if (e.target.classList.contains('nav__link')) {
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
        });
    }
});
/*Lecture*/

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(allSections);

document.getElementById('section--1');

console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//  Creating and inserting elements
// .insertAdjacentHTML

message.classList.add('cookie-message');
message.innerHTML =
    'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

//  Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
    message.remove();
    // message.parentElement.removeChild(message);
});

// styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message));

const newLocal = (message.style.height = `${
  Number.parseFloat(getComputedStyle(message).height, 10) + 30
}px`);

// attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

// Data  attributes
// data-version-name="3" == dataset.versionName

// classes

// logo.classList.add('c');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); //not includes

const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', e => {
//     alert('addEventListener: Great! You are reading the heeding: D');
// });

// const newLocal = h1.onmouseenter = () => {
//     alert('addEventListener: Great! You are reading the heeding: D');
// };

// rgb(255,255,255)
// const randomInt = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//     `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();

//     // stop propagation
//     e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
// });