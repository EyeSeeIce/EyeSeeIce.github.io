const anch = document.querySelectorAll('nav a[href*="#"]');

for(anchor of anch){
    if(anchor){
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            anchorId = this.getAttribute('href');   
            document.querySelector(anchorId).scrollIntoView({
                block: "start", behavior: "smooth"
            })
            console.log(anchorId)
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
})    
document.querySelector('.upper').addEventListener('click', function(){
        document.querySelector('a[href*="#about"]').scrollIntoView({
                block: "center", behavior: "smooth"
            })
})