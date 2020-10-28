$(document).ready(function() {

    $('.sliderImg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
    $('.leftSlide').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        slideshow: false,
    });
    $('.projectSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev1'),
        nextArrow: $('.next1'),
        infinite: false,
    });
    $('.mainImg').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        asNavFor: '.miniImg',
        prevArrow: $('.prev2'),
        nextArrow: $('.next2'),
    });
    $('.miniImg').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.mainImg',
        arrows:false,
    });
    $('#leftSlide2').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        slideshow: false,
    });
    $('.projectSlider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#prev3'),
        nextArrow: $('#next3'),
        infinite: false,
    });
    $('#quizSlider').owlCarousel({
        items: 1,
        dots: false,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        smartSpeed: 150,
        onInitialized: function(e) {
            let tek = this.items().length;
            $('.allSlides').text(' / ' + tek)

        }
    })
    
    $('#slider3').owlCarousel({
        items: 2,
        dots: false,
        loop: false,
        nav: true,
        center: false,
        startPosition: 0,
    })
    $('#slider4').owlCarousel({
        items: 2,
        dots: false,
        loop: false,
        nav: true,
        center: false,
        startPosition: 0,
    })


    let ft = document.querySelector('#ft')
    let al = document.querySelector('#al')

    let ft1 = document.querySelector('#ft1')
    let al1 = document.querySelector('#al1')

    let ft2 = document.querySelectorAll('#ft3')
    let al2 = document.querySelectorAll('#al3')

    let left1 = document.querySelector('.prev1')
    let right1 = document.querySelector('.next1')

    let left2 = document.querySelector('.prev3')
    let right2 = document.querySelector('.next3')

    let left3 = document.querySelectorAll('.left4')
    let right3 = document.querySelectorAll('.right4')

    let accept = 1;

    al.textContent = document.querySelectorAll('#slide1').length
    al1.textContent = document.querySelectorAll('#slide2').length
    al2.forEach((item) => {
      item.textContent = document.querySelectorAll('.quiz').length
    })
    

    left1.addEventListener('click', function(argument) {
        if (ft.textContent != 1 && accept == 1) {
            ft.textContent--
            accept = 0;
            setTimeout(() => {
                accept = 1
            }, 600)
        }

    })
    right1.addEventListener('click', function(argument) {

        if (ft.textContent != al.textContent && accept == 1) {
            ft.textContent++
            accept = 0
            setTimeout(() => {
                accept = 1
            }, 300)
        }

    })
    left2.addEventListener('click', function(argument) {
        if (ft1.textContent != 1 && accept == 1) {
            ft1.textContent--
            accept = 0;
            setTimeout(() => {
                accept = 1
            }, 600)
        }

    })
    right2.addEventListener('click', function(argument) {
        if (ft1.textContent != al1.textContent && accept == 1) {
            ft1.textContent++
            accept = 0
            setTimeout(() => {
                accept = 1
            }, 300)
        }

    })
    left3.forEach((item) => {
      item.addEventListener('click', function(argument) {
        if (ft2.textContent != 1 && accept == 1) {
            ft2.textContent--
            accept = 0;
            setTimeout(() => {
                accept = 1
            }, 600)
        }

    })
    })
        document.querySelectorAll('.qNext').forEach((item) => {
        item.addEventListener('click', function() {

            let inputs = document.querySelector('#quizSlider')

            if (inputs.querySelector('.owl-item.active').querySelector('input:checked') == null) {

            } else {

                $("#quizSlider").trigger("next.owl.carousel");
                document.querySelectorAll('.nowSlide').forEach((ar) => {
                    ar.textContent++;

                })
            }
        })
    })
    document.querySelectorAll('.qPrev').forEach((item) => {
        item.addEventListener('click', function(argument) {
            document.querySelectorAll('.nowSlide').forEach((ar) => {
                if (ar.textContent > 1) {
                    ar.textContent--
                }
            })
        })
    })
    $(".qPrev").click(function() {
    $("#quizSlider").trigger("prev.owl.carousel");
});
    //right3.forEach((item) => {
    //    item.addEventListener('click', function(argument) {
    //        ft2.forEach((item) => {
    //            
    //            
    //         if (item.textContent <= (al2[0].textContent-1)) {
    //            item.textContent++  
    //         } 
    //    })
    //    
//
//    //})
    //})
    //left3.forEach((item) => {
    //    item.addEventListener('click', function(argument) {
    //        ft2.forEach((item) => {
    //         if (item.textContent != 1) {
    //            item.textContent--
    //         }   
    //    })
    //    
//
//    //})
    //})

    let mini = document.querySelectorAll('.projectSlider img').length;





    var date = new Date();
    nowDay = date.getDate();
    nowMounth = date.getMonth() + 1;
    nowYear = date.getFullYear();
    allMounth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    let post = document.querySelector('#slider4')

    checkStock()

    function checkStock() {

        document.querySelectorAll('.date').forEach((item) => {
            let stockBlock = document.querySelector('#slider3')

            let Stockdat = new Date(item.getAttribute('year') + '-' + item.getAttribute('mounth') + '-' + item.getAttribute('day'))

            let dayNow = new Date();

            if (Stockdat > dayNow) {
                console.log('Акция действует')
            } else {

                post.appendChild(item.parentNode.parentNode)
                console.log('Акция окончена')
            }
            item.innerHTML = 'До ' + item.getAttribute('day') + ' ' + allMounth[(+item.getAttribute('mounth') - 1)] + ' ' + item.getAttribute('year')
        })
    }



    document.querySelectorAll('.detalis').forEach((item) => {
        item.addEventListener('click', function() {
            document.querySelector('.modalCo').classList.add('hide')
            document.querySelector('.overlay').classList.add('hide')
            let modal = document.querySelector('.modal')
            console.log(item.parentNode.parentNode)
            document.querySelector('body').style.overflow = 'hidden'
            modal.querySelector('.title1').textContent = (item.parentNode.querySelector('.stockValue').textContent + ' ' + item.parentNode.querySelector('.stockOn').textContent)
            modal.querySelector('.stockDate').textContent = 'Действует ' + item.parentNode.querySelector('.date').textContent
            modal.querySelector('.stockDiscr').textContent = item.parentNode.querySelector('.stockDi').textContent
            modal.querySelector('.p').textContent = item.parentNode.querySelector('.stockDif').textContent
            let url = item.parentNode.parentNode.querySelector('img').getAttribute('src')
            console.log(url)
            modal.style.background = 'url("' + url + '")'

        })
    })

    document.querySelector('.close').addEventListener('click', function() {
        document.querySelector('.modalCo').classList.remove('hide')
        document.querySelector('.overlay').classList.remove('hide')
        document.querySelector('body').style.overflow = 'auto'
    })

    document.querySelector('#btn').addEventListener('click', function(argument) {
        let name = document.querySelector('#name').value,
            sbj = document.querySelector('#sbj').value,
            email = document.querySelector('#email').value,
            msg = document.querySelector('#msg').value,
            inp = [];
        document.querySelectorAll('.in').forEach((item) => {
            inp.push(item.value)
            if (item.value == '') {

                item.style.borderBottom = '1px solid rgba(255, 44, 41, 0.9)'
            } else {
                item.style.borderBottom = '1px solid rgba(155, 255, 130, 0.9)'
            }
        })

        if (inp.includes('') == false) {



            //$.ajax({
            //    url: '../php/mail.php',
            //    type: 'POST',
            //    dataType: 'html',
            //    data: {'name': name,'sbj': sbj,'email': email,'msg': msg},
            //})
            //.done(function() {
            document.querySelector('#name').value = '';
            document.querySelector('#sbj').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#msg').value = '';
            document.querySelector('#btn').value = 'Отправлено'
            setTimeout(() => {
                document.querySelectorAll('.in').forEach((item) => {
                    item.style.borderBottom = '1px solid rgba(255, 255, 255, 0.9)'
                    document.querySelector('#btn').value = 'Отправить'
                })
            }, 2300)
            //})
            //.fail(function() {
            //    
            //})
            //.always(function() {
            //    
            //});
        }



        /*===================== Слайдер проектов 1 =====================*/












    })
});