var navMenusToggle = $('#navMenusToggle'),
    navMenus = $('#navMenus'),
    body = $('body'),
    closeNav = $('#closeNav'),
    navUtilityToggle = ('#navUtilityToggle'),
    navUtility = ('#navUtility');

// This JS will toggle the nav menu
toggleNavMenus = function() {
	$(navMenus).toggleClass('open');
	$(body).toggleClass('has-nav-open');
	toggleOverlay();
};

toggleUtilityNav = function() {
	$(navUtility).toggleClass('open');
};

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
