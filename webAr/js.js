let me = document.querySelector('#me')
let r = 0;
setInterval(() => {
  r++
  me.setAttribute('rotation', r+' '+'-70 90')
}, 30)
