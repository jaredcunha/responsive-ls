var inventoryToggleList = $('#inventoryToggleList');
var inventoryToggleMap = $('#inventoryToggleMap');
var inventoryViewToggleItem = $('.inventory-view-toggle__item');
var browseList = $('#browseList');
var browseMap = $('#browseMap');

clearToggleSelection = function() {
	inventoryViewToggleItem.removeClass("active");
};



$(inventoryToggleList).on('click', function(){
	clearToggleSelection();
	$(this).addClass("active");
	browseList.addClass("in-view");
	browseMap.removeClass("in-view");
});

$(inventoryToggleMap).on('click', function(){
	clearToggleSelection();
	$(this).addClass("active");
	browseMap.addClass("in-view");
	browseList.removeClass("in-view");
	console.log("Map Loaded");
});




