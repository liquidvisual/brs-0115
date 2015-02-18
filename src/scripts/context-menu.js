/*
    MAIN SCRIPTS - Last updated: 19-11-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Context Menu
//
// Note: 'context-menu-btn' lives inside the header.
// The context menu leverages the Transit animation library.
//-----------------------------------------------------------------

$('#context-menu-btn').click(function(e){

    var slideSections = $('.lv-main, .lv-touch-menu, .lv-sidebar');
    var contextMenu = $('.lv-context-menu');
    var contextMenuWidth = contextMenu.width();
    var contextMenuVisible = contextMenu.is(':visible');

    e.preventDefault();

    // Slide the menu offscreen left
    if (contextMenuVisible) {

        contextMenu.transition({ x: -contextMenuWidth/2 });
         slideSections.transition({
            x: 0,
            complete: function(){
                contextMenu.removeClass('lv-show') }});
    } else {
        // Slide onscreen right
        contextMenu.addClass('lv-show');
        contextMenu.css({ x: -contextMenuWidth/2}).transition({ x: 0 });
        slideSections.transition({ x: contextMenuWidth });
    }
});