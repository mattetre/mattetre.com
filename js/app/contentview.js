ContentView = Backbone.View.extend({
	
	el: $('#dynamic-content'),

    initialize: function() {
    },

    render:function (path) {
		var that = this;
		
		// download the template from the template directory
    	$.get("page/" + path, function(template){
    		// set the el to the downloaded template
      		that.$el.html(template);
    	});
	    return this;
    }
	
});
