$(document).ready(function(){
    $(".header-menu-toggle").click(function(){
        $(".header-nav").removeClass("hidden");
        $(".header-menu-toggle").addClass("hidden");
    });
    $(".header-nav__close").click(function(){
        $(".header-nav").addClass("hidden");
        $(".header-menu-toggle").removeClass("hidden");
    });
});

(function($){
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
        mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc'   // mailchimp url
    };

     /* Smooth Scrolling
    * ------------------------------------------------------ */
   var clSmoothScroll = function() {
        
    $('.smoothscroll').on('click', function (e) {
        var target = this.hash,
        $target    = $(target);
        
            e.preventDefault();
            e.stopPropagation();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, cfg.scrollDuration, 'swing').promise().done(function () {

            // check if menu is open
            if ($('body').hasClass('menu-is-open')) {
                $('.header-menu-toggle').trigger('click');
            }

            window.location.hash = target;
        });
    });

};

    (function ssInit() {
        clSmoothScroll();
    })();

})(jQuery)