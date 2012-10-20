(function () {
    var GITHUB_API = "https://api.github.com";

	var USERS = '/users';
	var REPOS = '/repos';
	var EVENTS = '/events';
	var FOLLOWERS = '/followers';

    var GITHUB = {
    	
    	getUserReposAndRunCallback: function(username, callback) {
			var apiPath = USERS + '/' + username + REPOS;
	   		callUrlAndFunction(apiPath, callback);
    	},
    	
    	getUserActivityRunCallback: function(username, callback) {
			var apiPath = USERS + '/' + username + EVENTS;
	   		callUrlAndFunction(apiPath, callback);
    	},
    	
    	getUserFollowersAndRunCallback: function(username, callback) {
			var apiPath = USERS + '/' + username + FOLLOWERS;
    		callUrlAndFunction(apiPath, callback);
    	}
    }


	/**
	* Issue AJAX call to Github API and run the callback function
	*  
	* @param {String} path	The API path to call
	* @param {Function} callback	The function to run with the response of the API call
	*/    
    function callUrlAndFunction(path, callback) {
    	$.ajax({
		    url: GITHUB_API + path,
		    crossDomain:true,
		    type:'get',
		    dataType:'json',
			success: function(data) {
				recentResult = data;
			    return callback(data);	
		    }
		});
	}
	
// Expose the object globally	
window.GITHUB = GITHUB;

})();
