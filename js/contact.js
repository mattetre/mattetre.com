/**
 * contact.js
 * 
 * Set the content of 'email' class with my email. Help try to reduce bot spam
 */

(function () {  
	
	var EMAIL_CLASS = '.email';
	
	var EMAIL_PARTS = [ "matt","@","mattetre.com" ];
	var EMAIL = EMAIL_PARTS[0] + EMAIL_PARTS[1] + EMAIL_PARTS[2];
	console.info(EMAIL);
	
	// set the content of
	$(EMAIL_CLASS)
		.text(EMAIL)
		.attr("href", "mailto:" + EMAIL);

})();