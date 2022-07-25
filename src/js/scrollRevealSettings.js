'use strict';

const castomDelay = 600;
const castomInterval = 300;

// https://scrollrevealjs.org/api/defaults.html
// Basic animations settings
ScrollReveal({
	duration: 1000,
	delay: 400,
	distance: '100px',
	easing: 'ease',
});

// Header

ScrollReveal().reveal('.header__img', {
	origin: 'top',
});

ScrollReveal().reveal('.header__text', {
	delay: castomDelay,
});

// Be active

ScrollReveal().reveal('.be-active__text', {
	origin: 'left',
});

ScrollReveal().reveal('.be-active__img', {
	origin: 'right',
	delay: castomDelay,
});

// Advices

ScrollReveal().reveal('.advices__img', {
	origin: 'left',
});

ScrollReveal().reveal('.advices__examples-box', {
	origin: 'right',
	delay: castomDelay,
});

// Cocktails

ScrollReveal().reveal('.cocktails__img, .cocktails__text', {
	interval: castomInterval,
});

// Bottom

ScrollReveal().reveal('.bottom__images img, .bottom__card', {
	interval: castomInterval,
});

// Be active 2

ScrollReveal().reveal('.be-active2__text', {
	origin: 'top',
});

ScrollReveal().reveal('.be-active2__card', {
	interval: castomInterval,
});

// Lettuce

ScrollReveal().reveal('.lettuce__text', {
	origin: 'left',
});

ScrollReveal().reveal('.lettuce__img', {
	origin: 'right',
});

// Contact

ScrollReveal().reveal('.contact__img-text', {
	origin: 'top',
});

ScrollReveal().reveal('.contact__form', {
	origin: 'right',
});
