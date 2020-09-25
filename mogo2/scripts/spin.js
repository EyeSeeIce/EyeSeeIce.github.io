jQuery(document).ready(function($) {
    const time = 2;
    let clear = 1;
    $(window).scroll(function(event) {
        
        $('#counter').each(function() {
        	
            let yPos = $(this).offset().top,
                topWindow = $(window).scrollTop();
            if (yPos < topWindow+800 && clear == 1) {
                $('span').each(function() {
                    let i = 1,
                        num = $(this).data('num'),
                        step = 1000 * time / num,
                        that = $(this),
                        int = setInterval(() => {
                            if (i <= num) {
                                that.html(i);
                                clear++
                            } else {
                                clearInterval(int);
                                
                            }
                            i++

                        }, step)

                });
            }

        });
    });

});