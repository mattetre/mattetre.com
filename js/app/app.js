var Router = Backbone.Router.extend({

    routes: {
        "!page/*path": "loadPage",
        "*actions": "defaultRoute"
    },
    
    initialize: function(options) {
    	var that = this;
		$("a.nav-item").each(function() {
			//alert("click");
	        var target = $(this).attr('href');
	        console.log(target);
	        that.bind("click", that.navigate(target));
	    });
    },
    
    loadPage: function(path) {
    	// create new content view with the URL path and render it
		var contentView = new ContentView();
		contentView.render(path);
    },
    
    defaultRoute: function (actions) {
    	// default page to load
		this.loadPage("about.html");
    }

});

var router = new Router();
Backbone.history.start();

