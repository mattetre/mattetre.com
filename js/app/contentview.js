ContentView = Backbone.View.extend({
	
	el: $('#dynamic-content'),

    initialize: function() {
    },

    render:function (path) {
		var self = this;
		
		// download the template from the template directory
    	$.get("page/" + path, function(template){
    		// fade out the div
    		self.$el.fadeOut("fast", function() {
    			// when the fade out complete run callback to set content and fade in
      			self.$el.html(template);
      			self.$el.fadeIn("fast");
    		});
    	});
	    return this;
    }
	
});
