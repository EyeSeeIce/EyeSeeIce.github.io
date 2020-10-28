//jQuery(document).ready(function($) {
//    const time = 2;
//    let clear = 1;
//    $(window).scroll(function(event) {
//        
//        $('#counter').each(function() {
//        	
//            let yPos = $(this).offset().top,
//                topWindow = $(window).scrollTop();
//            if (yPos < topWindow+800 && clear == 1) {
//                $('span').each(function() {
//                    let i = 1,
//                        num = $(this).data('num'),
//                        step = 1000 * time / num,
//                        that = $(this),
//                        int = setInterval(() => {
//                            if (i <= num) {
//                                that.html(i);
//                                clear++
//                            } else {
//                                clearInterval(int);
//                                
//                            }
//                            i++
//
//                        }, step)
//
//                });
//            }
//
//        });
//    });
//
//});
jQuery(document).ready(function() {

    var show = true;
    var countbox = ".num";
    $(window).on("scroll load", function() {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var w_height = $(window).height(); // Высота окна браузера
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (come('.nu')) {
            $('.nu').spincrement({
                thousandSeparator: "",
                duration: 2200
            });
            show = false;
        };
    }); 


});
function come(elem) {
  var docViewTop = $(window).scrollTop(),
    docViewBottom = docViewTop + $(window).height(),
    elemTop = $(elem).offset().top,
    elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

