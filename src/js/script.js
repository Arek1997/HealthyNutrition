'use strict';

const body = document.body;
const burgerBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav__menu--mobile');
const mobileLinks = mobileMenu.querySelectorAll('.nav__menu--mobile a');
const footerYear = document.querySelector('.footer__year');
let initialScrollPos = window.scrollY;

footerYear.textContent = new Date().getFullYear();

const handleMenu = () => {
	burgerBtn.classList.toggle('is-active');
	mobileMenu.classList.toggle('nav__menu--mobile--active');
	document.body.classList.toggle('turnOffScroll');
};

const handleNav = function () {
	const currentScrollPos = window.scrollY;

	initialScrollPos < currentScrollPos
		? body.classList.add('hideNav')
		: body.classList.remove('hideNav');

	initialScrollPos = currentScrollPos <= 0 ? 0 : currentScrollPos;
};

mobileLinks.forEach((link) => {
	link.addEventListener('click', handleMenu);
});

burgerBtn.addEventListener('click', handleMenu);
window.addEventListener('scroll', handleNav);
