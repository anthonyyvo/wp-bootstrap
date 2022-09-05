(function($){
'use strict';

//mobile nav
if ($('.mobile-menu').length) {
    console.log('hello')
    const mobileMenuContent = $('#top-navigation .navigation').html();
    $('.mobile-menu .navigation').append(mobileMenuContent);
    $('.sticky-header .navigation').append(mobileMenuContent);
    $('.mobile-menu .close-button').on('click', function(){
        $body.removeClass('mobile-menu-visible')
    })
}

})(jQuery);