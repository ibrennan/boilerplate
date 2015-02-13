define(function (require) {

	var $ = require('jquery'),
		Backbone = require('backbone');

	return Backbone.Router.extend({

		routes: {
			"*route" : "loadView"
		},

		loadView: function (route) {

			if(!route){

				route = "index";

			};

			console.log("Route: " + route);

			var params = route.split("/");

			require(['app/views/' + params[0]], function(View){

				var view = new View(params);

				$(window).scrollTop(0);

			});

		}

	});

});