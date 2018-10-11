// $(document).ready(function(){
//     $(".header-menu-toggle").click(function(){
//         $(".header-nav").removeClass("hidden");
//         $(".header-menu-toggle").addClass("hidden");
//     });
//     $(".header-nav__close").click(function(){
//         $(".header-nav").addClass("hidden");
//         $(".header-menu-toggle").removeClass("hidden");
//     });
// });

(function($){
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
    };

     /* Smooth Scrolling
    * ------------------------------------------------------ */
   var clSmoothScroll = function() {
        
        $('.smoothscroll').on('click', function (e) {
            var target = this.hash;
            $target    = $(target);

            e.preventDefault();
            e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                // if ($('body').hasClass('menu-is-open')) {
                //     $('.header-menu-toggle').trigger('click');
                // }

                // window.location.hash = target;
            });
        });
    };

    
   /* OffCanvas Menu
    * ------------------------------------------------------ */
   var clOffCanvas = function() {

        var menuTrigger     = $('.header-menu-toggle'),
            nav             = $('.header-nav'),
            closeButton     = nav.find('.header-nav__close'),
            siteBody        = $('body'),
            mainContents    = $('section, footer');

            // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e){
            e.preventDefault();
            siteBody.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function(e){
            e.preventDefault();
            menuTrigger.trigger('click');	
        });

        // close menu clicking outside the menu itself
        siteBody.on('click', function(e){
            if( !$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span') ) {
                siteBody.removeClass('menu-is-open');
            }
        });
    };

    /*Initialize*/
    (function ssInit() {

        clSmoothScroll();
        clOffCanvas();

    })();

})(jQuery)