// This JS will toggle the nav menu
toggleNavMenus = function() {
	$(navMenus).toggleClass('open');
	$(body).toggleClass('has-nav-open');
	toggleOverlay();
};

toggleUtilityNav = function() {
	$(navUtility).toggleClass('open');
};

toggleOverlay = function() {
	var overlay = $('#overlay');
	if ( $(overlay).length ) {
		$(overlay).remove();
	} else {
		body.append('<div id="overlay" class="overlay"></div>');
	}
};

var navMenusToggle = $('#navMenusToggle');
var navMenus = $('#navMenus');
var body = $('body');
var closeNav = $('#closeNav');
var navUtilityToggle = ('#navUtilityToggle');
var navUtility = ('#navUtility');


$(navMenusToggle).add(closeNav).on('click', function(){
	toggleNavMenus();
});

$(navUtilityToggle).on('click', function(){
	toggleUtilityNav();
});


$(".subnav__list").on("touchstart",function(){
  $(".subnav__list--current").addClass('interacting');
});
$(".subnav__list").on("touchend",function(){
  $(".subnav__list--current").removeClass('interacting');
});
