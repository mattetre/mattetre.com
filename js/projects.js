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
					// create repo link
					var repoLink = $('<a>', {href: repo.html_url, text: repo.name, target: 'new'});
					var repoListItem = $('<li>')
						.append(repoLink);

					// create description <li>
					var repoDescItem = $('<ul>')
						.append($('<li>'))
						.append(repo.description);
					
					// add the repo link and description to the list
					githubList
						.append(repoListItem)
						.append(repoDescItem);
				}
			})
		} else {
			// otherwise show no content message
			githubLoading.text("No repositories found...");
		}
	}
	
	GITHUB.getUserReposAndRunCallback('etre0', printRepoNamesAndLinks);
  
})();