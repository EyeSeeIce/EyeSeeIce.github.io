let me = document.querySelector('#me')
let me2 = document.querySelector('#me2')
let r = 0;
setInterval(() => {
  r++
  me.setAttribute('rotation', '180 0 '+r)
}, 30)



	