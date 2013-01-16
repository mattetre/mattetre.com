/**
 * main.js
 * 
 * Used on the index page to setup dynamic linking 
 */
(function() {
	
	// Constants
	var CONSTANT_CLASSES = {
		dynamic_content_div : 'dynamic-content',
		nav_selected : 'selected'
	}

	// load up the about me page on first load
	//toggleAndLoadItem($('.nav-about'));

	// setup navigation link click handlers
	$(".nav-item").click(function() {
		var $this = $(this);
		toggleAndLoadItem($this);
		
		return false;
	});
	
	function toggleAndLoadItem($item) {
		var path = $item.attr("href");
		if (!isNavSelected($item)) {
			console.debug(path);
			// set the current page to not selected
			toggleNavSelected($('.' + CONSTANT_CLASSES.nav_selected));
			// set new item to selected
			toggleNavSelected($item);
			// load the dynamic content
			loadDynamicContent(path);
		}
	}
	
	
	/**
	 * Load dynamic content in the DYNAMIC_CONTENT_DIV_CLASS div
	 * @param {String} path URL path to get html data from
	 */
	function loadDynamicContent(path) {
		var destination = $('.' + CONSTANT_CLASSES.dynamic_content_div);
		loadPathToDestination(path, destination);
	}

	/**
	 * Load dynamic content at URL location
	 * @param {String} path URL path to get html data from
	 * @param {Object} destination jQuery object destination to place result
	 */
	function loadPathToDestination(path, destination) {
		destination.load(path).hide().fadeIn();
	}
	
	/**
	 * Toggle a navigation items selected state 
	 * @param {Object} navItem jQuery object to toggle selected state
	 */
	function toggleNavSelected(navItem) {
		if (isNavSelected(navItem)) {
			navItem.removeClass(CONSTANT_CLASSES.nav_selected);
		} else {
			navItem.addClass(CONSTANT_CLASSES.nav_selected);
		}
	}
	
	/**
	 * Check if the navigation item is selected 
	 * @param {Object} navItem jQuery navigation item to check
	 */
	function isNavSelected(navItem) {
		return navItem.hasClass(CONSTANT_CLASSES.nav_selected);
	}
  
})();