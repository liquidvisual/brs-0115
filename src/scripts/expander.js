/*
    EXPANDER.JS - Last updated: 25-02-15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Expander
//-----------------------------------------------------------------

$(function() {
	// var expanderTrigger = $('.js-expander-trigger');
	// var expanderContent = $('.js-expander-content');

	$('.js-expander').click(function(e){
		e.preventDefault();
		$(this).toggleClass("lv-expander-hidden");
	});
});