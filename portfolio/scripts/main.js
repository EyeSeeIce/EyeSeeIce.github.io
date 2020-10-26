$(document).ready(function(){
  $('.sec5Content').slick({
    slidesToShow: 1,
  	slidesToScroll: 1,
  	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  });
});

document.querySelector('.menu').addEventListener('click', function (argument) {
	document.querySelector('.modal').classList.add('hide')
	setTimeout(() => {
	  document.querySelector('body').classList.add('scrollBlock')
	}, 300)
})
document.querySelector('.close').addEventListener('click', function (argument) {
	document.querySelector('.modal').classList.remove('hide')
	document.querySelector('body').classList.remove('scrollBlock')
})

const anch = document.querySelectorAll('[href*="#"]');

for(anchor of anch){
    if(anchor){
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            anchorId = this.getAttribute('href');   
            document.querySelector(anchorId).scrollIntoView({
                block: "start", behavior: "smooth"
            })
            document.querySelector('.modal').classList.remove('hide')
	document.querySelector('body').classList.remove('scrollBlock')
        })
    }
}
window.addEventListener('scroll', function(){
    let scrollTop = pageYOffset;
    if (scrollTop > 900) {
        document.querySelector('.upper').classList.add('showUpper')
    }else if (scrollTop < 900) {
        document.querySelector('.upper').classList.remove('showUpper')
    }
    if (scrollTop > 400){
        $('.mouse2').hide('slow')
    }else if (scrollTop < 400){
        $('.mouse2').show('slow');
    }
})    
document.querySelector('.upper').addEventListener('click', function(){
        document.querySelector('a[href*="#about"]').scrollIntoView({
                block: "center", behavior: "smooth"
            })
})

let dark = false;
document.querySelector('.logo').addEventListener('click', function (argument) {
    if (!dark) {
        document.documentElement.setAttribute('data-theme', 'dark')
        dark = true;
    }else{
        document.documentElement.removeAttribute('data-theme', 'dark')
        dark = false;
    }
})