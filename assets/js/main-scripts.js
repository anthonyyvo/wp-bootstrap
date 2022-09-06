(function($){
'use strict';

//mobile nav
if ($('.mobile-menu').length) {
    console.log('hello')
    // Add menu from main menu to mobile menu
    const mobileMenuContent = $('#top-navigation .navigation').html();
    $('.mobile-menu .navigation').append(mobileMenuContent);
    $('.sticky-header .navigation').append(mobileMenuContent);
    $('.mobile-menu .close-button').on('click', function(){
        $body.removeClass('mobile-menu-visible')
    });
    $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click',
        function() {
            $(this).prev('ul').slideToggle(500);
        }
    )
    // Menu Close When click on backdrop and Close Button
    $('.mobile-menu .menu-backdrop , .mobile-menu .close-btn').on('click',
        function() {
            $('.mobile-menu').removeClass('mobile-menu-visible');
        }
    );
    // Menu Open when click Burger
    $('.navbar-open').on('click', 
        function() {
            $('.mobile-menu').addClass('mobile-menu-visible')
        }
    );
    // Add Open Button on Mobile Menu Item (has children)
    if($('.mobile-menu li.menu-item-has-children ul').length) {
        $('.mobile-menu li.menu-item-has-children').append('<div class="dropdown-btn"><i class="flaticon flaticon-arrow-down-sign-to-navigate"></i></div>')
    }
    // Toogle Open Sub-Menu
    $('.mobile-menu .dropdown-btn').on('click',
        function() {
            console.log('clicked')
            $(this).prev('ul').slideToggle(500);
            $(this).toggleClass('rotate-btn');
        }
    )

}

})(jQuery);