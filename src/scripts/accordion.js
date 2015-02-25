/*
    ACCORDION.JS - Last updated: 25.02.15

    - Note - Refactor into
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

$('.js-accordion-trigger').bind('click', function(e){
	var $this = $(this);
	var isActive = $this.hasClass('active');
	var accordionTriggers = $('.js-accordion-trigger').not($this);
	var accordion = $('.js-accordion', $this);
	var accordionHeight = accordion.css({ height: 'auto' }).height();

	var startPos = isActive ? accordionHeight : 0;
	var endPos = isActive ? 0 : accordionHeight;

	e.preventDefault();

	// Deactivate all
	$('.js-accordion').not($this).removeClass('active').css({ height: 0 });
	accordionTriggers.removeClass('active');

	// Assign Active to target
	if (!isActive) {
		$this.addClass('active');
		accordion.addClass('active');
	} else {
		accordion.removeClass('active');
	}

	// Transition
	accordion.css({ height: startPos }).transition({ height: endPos+'px', queue: false, complete:
		function(){
			if (isActive) $this.removeClass('active');
		} }, 400, 'ease');
});

//==================================================
//
//==================================================