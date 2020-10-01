//jQerry(document).ready(function(){
//  $(".menu").on('click',function(){
//    $(this).find(".hambergerIcon").toggleClass("open");
//  });
//})
//

//const menu = document.querySelector('.menu')
//		burger = document.querySelector('.hambergerIcon')
//
//menu.addEventListener('click', open);
//function open (argument) {
//	burger.classList.toggle('open')
//}

//$('button').on('click', function() {
//  $(this).toggleClass('is-active');
//});


const menuToggle = document.querySelector('.menu-toggle').addEventListener('click', open)
const menu = document.querySelector('.burgerMenu');
const social = document.querySelector('.social');
const head = document.querySelector('header');
const body = document.querySelector('body')
document.querySelectorAll('.navBurger a[href*="#"]').forEach((item) => {
	  item.addEventListener('click', function(e){
	  		body.classList.remove('bodyOverflow');
	  		head.classList.remove('bodyLock')
	  		menu.classList.remove('burgerOpen')
	  		document.querySelector('.menu-toggle').classList.remove('active')
	  })
	  
	})
document.querySelector('.contact').addEventListener('click', soc)
function open () {
	console.log(this)
		this.classList.toggle('active')
		menu.classList.toggle('burgerOpen')
		bodyLock();
}

function soc (argument) {
	social.classList.toggle('socialOpen')
	
}

function bodyLock (argument) {
	const lockPadding = window.innerWidth - document.querySelector('.headerWrapper').offsetWidth + 'px';
	head.classList.toggle('bodyLock')
	body.classList.toggle('bodyOverflow')
	
}

