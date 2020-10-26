const modalSettings = {
	transition: 0.3+'s',
	transitionNum: NaN,
}



let btn = document.querySelector('.openBtn').addEventListener('click', function (argument) {
	document.querySelector('.headerform').style.display = 'block'
	document.querySelector('.openBtn').style.display = 'none'
	
})

document.querySelector('.navgation').addEventListener('click', function (argument) {
	document.querySelector('.modal').classList.remove('hide')
	document.querySelector('.modal').style.transition = modalSettings.transition;
	getString(modalSettings.transition)
	setTimeout(() => {
	  lock('body')
	}, modalSettings.transitionNum*500)

		
})
document.querySelector('.close').addEventListener('click', function (argument) {
	document.querySelector('.modal').classList.add('hide')
	unlock('body')
})
document.querySelector('.contactBtn').addEventListener('click', function (argument) {
	document.querySelector('.headerform').classList.add('showHeaderForm')
	document.querySelector('.overlay').style.display = 'block'
	setTimeout(() => {
	  lock('body')
	}, modalSettings.transitionNum*500)

})
document.querySelector('.overlay').addEventListener('click', function (argument) {
	document.querySelector('.headerform').classList.remove('showHeaderForm')
	document.querySelector('.overlay').style.display = 'none'
	unlock('body')
})


function lock (el){
	document.querySelector(el).style.overflow = 'hidden'
}
function unlock (el){
	document.querySelector(el).style.overflow = 'auto'
}

const anch = document.querySelectorAll('[href*="#"]');

for(anchor of anch){
    if(anchor){
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            anchorId = this.getAttribute('href');   
            document.querySelector(anchorId).scrollIntoView({
                block: "start", behavior: "smooth"
            })
            document.querySelector('.modal').classList.add('hide')
            unlock('body')
			
        })
    }
}















function getString(str) {
    let result = str.match(/(-?\d+(\.\d+)?)/g).map(Number);
	modalSettings.transitionNum = result[0]
}
