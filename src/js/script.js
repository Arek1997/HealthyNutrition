'use strict';

const burgerBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav__menu--mobile');
const mobileLinks = mobileMenu.querySelectorAll('.nav__menu--mobile a');
const footerYear = document.querySelector('.footer__year');

const handleMenu = () => {
	burgerBtn.classList.toggle('is-active');
	mobileMenu.classList.toggle('nav__menu--mobile--active');
	document.body.classList.toggle('turnOffScroll');
};

footerYear.textContent = new Date().getFullYear();

mobileLinks.forEach((link) => {
	link.addEventListener('click', handleMenu);
});

burgerBtn.addEventListener('click', handleMenu);
