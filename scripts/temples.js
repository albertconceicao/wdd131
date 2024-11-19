const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const pageTitle = document.querySelector('header h1');
const header = document.querySelector('header');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	header.classList.toggle('show');
	pageTitle.classList.toggle('hide');
});