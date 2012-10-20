(function () {  
	
	// create and print list
	function printRepoNamesAndLinks(data) {
		var githubList = $('.github-list');
		var githubLoading = $('.github-loading');
		
		if (data.length > 0) {
			// if data is greater than 0 then hide the loading text
			githubLoading.fadeOut(function() {
				for (var i in data) {
					var repo = data[i];
					var repoLink = $('<a>', {href: repo.html_url, text: repo.name, target: 'new'});
					var listItem = $('<li>');
					repoLink.appendTo(listItem);
					listItem.appendTo(githubList);
				}
			})
		} else {
			// otherwise show no content message
			githubLoading.text("No repositories found...");
		}
	}
	
	GITHUB.getUserReposAndRunCallback('etre0', printRepoNamesAndLinks);
  
})();