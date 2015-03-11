/*
    LEGACY.JS - Last updated: 11.03.14

    Notes: All scripts that deal with fixing or patching the
    existing site code go here.
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Legacy
//-----------------------------------------------------------------

$(function(){
	// $('.lv-content table').wrap('<div class="lv-table-responsive"></div>');

	// Add styles to existing tables
	$('.lv-content .Report, .lv-content .Form').addClass('lv-table-theme');
	$('.lv-content #questions').parent().addClass('legacy-form');
});

//==================================================
//
//==================================================