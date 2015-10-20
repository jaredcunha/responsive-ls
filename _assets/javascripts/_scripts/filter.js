var refinementsFormToggle = $('#refinementsFormToggle');
var refinementsForm = $('#refinementsForm');
var refinementsFormClose = $('#refinementsFormClose');

$(refinementsFormToggle).on('click', function(){
	toggleOverlay();
	refinementsForm.toggleClass('open');
});

$(refinementsFormClose).on('click', function(){
	toggleOverlay();
	refinementsForm.removeClass('open');
});