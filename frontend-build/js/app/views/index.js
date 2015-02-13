define(function (require) {

	var tpl = require("text!templates/index.tpl"),
		template = _.template(tpl);

	return Backbone.View.extend({

		el: '.view',

		initialize : function(attrs) {
			this.options = attrs;

			this.render();
		},

		events : {
			
		},

		render : function () {

			this.$el.html(template());

			return this;

		}

	});

});