Zepto(function($){

	/**
	* These are the configurable defaults for the menu
	* @min_move_y : this is controlled in your css file (#swipemenu nav) and is set to a negative value to hide the offscreen menu
	* @swipe_menu : main container wrapper for the menu
	* @puller : the swipeUp/swipeDown event will be bound to this
	* @nav_container : the container for the offscreen navigation
	* @menu_btns_container : the container for the default mini-button navigation
	*
	*/

	$('#puller').swipeslide({
		min_move_y: Math.abs(parseInt($('#swipemenu nav').css('top').split('px')[0], 10)),
		swipe_menu: '#swipemenu',
		puller: '#puller',
		nav_container: 'nav',
		menu_btns_container: 'aside'
	});
	
});