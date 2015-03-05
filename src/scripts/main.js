/*
    MAIN SCRIPTS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar

    // Fastclick on touch
    FastClick.attach(document.body);

    // $(window).scroll(function (event) {
    //     var y = $(this).scrollTop();
    //     if (y >= 240)
    //         $('.sticky-scroll').addClass('fixed');
    //     else
    //         $('.sticky-scroll').removeClass('fixed');
    // });
});

//==================================================
// Window Load
//==================================================

$(window).load(function() {
    NProgress.done(); // Complete preload once page loaded
});

// var top = $('.sticky-scroll-box').offset().top;

$(function () {
    $('.footable').footable({
        breakpoints: {
            phone: 480,
            tablet: 963-30 //-30
        }
    }).removeClass('lv-loading');//.find('> tbody > tr:not(.footable-row-detail):nth-child(even)').addClass('zebra');
});

//-----------------------------------------------------------------
// Refactor into legacy?
//-----------------------------------------------------------------

// $('.lv-content table').wrap('<div class="lv-table-responsive"></div>');

$('.lv-content .Report, .lv-content .Form').addClass('lv-table-theme');

$('.lv-content #questions').parent().addClass('legacy-form');

//-----------------------------------------------------------------
// <= IE8 Caution Message
//-----------------------------------------------------------------

//$('.lv-alert .close-btn').click(function(){$(this).parent().hide();});

//-----------------------------------------------------------------
// +++ HELPERS +++
//-----------------------------------------------------------------
//==================================================
// Developer: COMMAND+S for screen width
//==================================================

$(document).keypress(function(event) {
    if (event.which == 115 && (event.ctrlKey||event.metaKey)|| (event.which == 19)) {
        event.preventDefault();
        alert("(w) "+$(window).width()+" (h) "+$(window).height());
        return false;
    }
    return true;
});