var $overlay = $('#overlay');

toggleOverlay = function() {
	if ( $($overlay).length ) {
		$($overlay).remove();
	} else {
		body.append('<div id="overlay" class="overlay"></div>');
	}
};
