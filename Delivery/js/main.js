

const cartButton = document.getElementById('cart-button'),
	modal = document.querySelector('.modal'),
	close = document.getElementById('close');

toggleModal = () =>{
	modal.classList.toggle('is-open');
}

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

new  WOW().init();