/*
 * Common javascript functionality used on multiple pages
 */
(function() {
	
	var DYNAMIC_CONTENT_DIV_CLASS = "dynamic-content";
	var NAV_SELECTED_CLASS = "selected";

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
			toggleNavSelected($('.' + NAV_SELECTED_CLASS));
			// set new item to selected
			loadDynamicContent(path);
		}
		return false;
	});
	
	function loadDynamicContent(path) {
		var destination = $('.' + DYNAMIC_CONTENT_DIV_CLASS);
		loadPathToDestination(path, destination);
	}

	/**
	 * Load dynamic content at URL location
	 * @param path URL path to get html data from
	 * @param destination Jquery object destination to place result
	 */
	function loadPathToDestination(path, destination) {
		var state = 1;
		if (path.indexOf('contact') != -1) {
			state = 2;
		}
	    History.pushState({state:state}, "State 1", '?'+path); // logs {state:1}, "State 1", "?state=1"
		destination.load(path).hide().fadeIn();
	}
	
	function toggleNavSelected(navItem) {
		if (isNavSelected(navItem)) {
			navItem.removeClass(NAV_SELECTED_CLASS);
		} else {
			navItem.addClass(NAV_SELECTED_CLASS);
		}
	}
	
	function isNavSelected(navItem) {
		return navItem.hasClass(NAV_SELECTED_CLASS);
	}
  
})();