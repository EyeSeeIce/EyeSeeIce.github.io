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


	document.querySelector('.menu-toggle').addEventListener('click', open)
const menu = document.querySelector('.burgerMenu');
function open () {
		this.classList.toggle('active')
		menu.classList.toggle('burgerOpen')

}


