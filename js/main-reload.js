(function() {
	
	var MAIN_HTML = 'main-html';
	
	/*
	 * check if function exists.
	 * If this is loaded within the context of the main page the main.js should already be loaded
	 */
	if (typeof MAIN === 'undefined') {
		var path = window.location.pathname;
		$('.' + MAIN_HTML).load('index.html' , function() {
  			NAVIGATE_TO_PAGE(path);
		});
	}
	
})();
