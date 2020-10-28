let colors = document.querySelectorAll('.color input')
let boxShadow = document.querySelectorAll('.shadow input')
displayBox = document.querySelector('.box')
css = document.querySelector('.cssSettings')
buttons = document.querySelectorAll('.buttons span')
document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', function(e) {
        document.querySelectorAll('.tabContent').forEach((cont) => {
            cont.classList.add('hide')
        document.querySelector('.'+tab.attributes[0].value).classList.remove('hide')
        })
        
    })


})









const settings = {
    r: NaN,
    g: NaN,
    b: NaN,
    a: NaN,
    h: NaN,
    v: NaN,
    s: NaN,
    bl: NaN,
    clr: NaN,

}
rgba = (settings.r + ',' + settings.g + ',' + settings.b + ',' + settings.a);


colors.forEach((item) => {
    item.addEventListener('input', function() {
        settings.r = colors[0].value
        settings.g = colors[1].value
        settings.b = colors[2].value
        settings.a = colors[3].value
        rgba = (settings.r + ',' + settings.g + ',' + settings.b + ',' + settings.a);
        displayBox.style.background = 'rgba(' + rgba + ')'
        css.textContent = 'background-color: rgba(' + rgba + ');'
    })
})

boxShadow.forEach((item) => {
    item.addEventListener('input', function() {
        console.log(boxShadow[0].value)
        settings.h = boxShadow[0].value
        settings.v = boxShadow[1].value
        settings.s = boxShadow[2].value
        settings.bl = boxShadow[3].value
        settings.clr = boxShadow[4].value
        shadow = (settings.h + 'px ' + settings.v + 'px ' + settings.s + 'px ' + settings.bl+'px '+settings.clr)
        displayBox.style.boxShadow = ''+shadow+''
        css.textContent = 'box-shadow: ' + shadow + ';'
    })
})