$(function () {
    $(window).on('load scroll', function () {
        var winScroll = $(window).scrollTop();
        var winHeight = $(window).height();
        var scrollPos = winScroll + (winHeight * 0.8);

        $(".show").each(function () {
            if ($(this).offset().top < scrollPos) { $(this).css({ opacity: 1, transform: 'translate(0, 0)' }); }
        });
    });
});