let me = document.querySelector('#me')
let me2 = document.querySelector('#me2')
let r = 0;
setInterval(() => {
  r++
  me.setAttribute('rotation', '-90 '+r+' '+r)
}, 30)



	