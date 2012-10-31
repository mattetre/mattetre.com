(function() {
	// Constants
	var CONSTANT_CLASSES = {
		dynamic_content_div : 'dynamic-content',
		nav_selected : 'selected'
	}

	// setup History.js library to handle ajax history states 
	var History = window.History;
	History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
        var State = History.getState(); // Note: We are using History.getState() instead of event.state
        History.log(State.data, State.title, State.url);
    });
	
	
	// setup navigation link click handlers
	$(".nav-item").click(function() {
		var $this = $(this);
		var path = $this.attr("href");
		if (!isNavSelected($this)) {
			console.debug(path);
			// set the current page to not selected
			toggleNavSelected($('.' + CONSTANT_CLASSES.nav_selected));
			// set new item to selected
			toggleNavSelected($this);
			// load the dynamic content
			loadDynamicContent(path);
		}
		return false;
	});
	
	
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
		var state = 1;
		if (path.indexOf('contact') != -1) {
			state = 2;
		}
	    //History.pushState({state:state}, "State 1", '?'+path); // logs {state:1}, "State 1", "?state=1"
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