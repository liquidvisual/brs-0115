/*
    MAIN SCRIPTS - Last updated: 18-02-15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var slideSections = $('.lv-main, .lv-touch-menu, .lv-sidebar, .lv-page-lock-overlay');
var contextMenu = $('.lv-context-menu');
var page = $('.lv-page');
var contextMenuWidth = contextMenu.width(); //- 5;
var contextMenuClosed = !contextMenu.is(':visible');
var pageLockOverlay = $('<span class="lv-page-lock-overlay"></span>');

//-----------------------------------------------------------------
// Context Menu
//
// Note: 'context-menu-btn' lives inside the header.
// The context menu leverages the Transit animation library.
//-----------------------------------------------------------------

$('#context-menu-btn').on('click', function(e){

    e.preventDefault();

    //==================================================
    // If Menu is CLOSED
    //==================================================

    if (contextMenuClosed) {

        page.addClass('is-locked').append(pageLockOverlay); // lock the page and append 'exit' overlay
        contextMenu.addClass('lv-show'); // show context menu
        contextMenu.css({ x: -contextMenuWidth/6}).transition({ x: 0, queue: false }); // slide in from left slightly

        //==================================================
        // Slide and Fade in Lock Overlay
        //==================================================

        pageLockOverlay.transition({ x: contextMenuWidth, opacity: 1, queue: false, complete: exitOverlay });

        //==================================================
        // Slide Sections OPEN
        //==================================================

        slideSections.transition({ x: contextMenuWidth, queue: false }); // complete transition

    }
}); // end click

//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var exitOverlay = function(){

    pageLockOverlay.on('touchstart, touchmove, click', function(e){

    //==================================================
    // Slide and Fade in Lock Overlay
    //==================================================

    $(this).transition({ x: 0, opacity: 0, queue: false, complete:
        function(){
            $(this).remove();
        } });
    //==================================================
    // Slide Context Menu CLOSED
    //==================================================

    contextMenu.transition({ x: -contextMenuWidth/6, queue: false });

    //==================================================
    // Slide Sections CLOSED
    //==================================================

    slideSections.transition({ x: 0, queue: false, complete:

        //==================================================
        // Slide Sections CLOSED
        //==================================================

        function(){
            page.removeClass('is-locked'); // lock the page
            contextMenu.removeClass('lv-show');
            slideSections.attr('style', ''); // to be safe, remove all transforms by JS
        }
    }); // complete context menu transition
});
}




