toggleOverlay = function() {
	var overlay = $('#overlay');
	if ( $(overlay).length ) {
		$(overlay).remove();
	} else {
		body.append('<div id="overlay" class="overlay"></div>');
	}
};