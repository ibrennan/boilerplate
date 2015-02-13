require.config({

	baseUrl: '_includes/js/vendor',

	urlArgs: "v=" + (new Date()).getTime(),

	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		parse: {
			deps: [
				'jquery',
				'underscore'
			],
			exports: 'Parse'
		},
		hammerjs: {
			exports: 'Hammer'
		},
		facebook : {
			exports: 'FB'
		}
	},

	paths: {
		app: '../app',
		templates: '../templates',
		hammerjs: 'hammer',
		facebook: '//connect.facebook.net/en_US/all'
	}
	
});

require(['parse', 'app/router', 'facebook'], function (Parse, Router) {
	
	Parse.initialize(
		"YOUR APP ID",
		"YOUR APP ID"
	);

	FB.init({
		appId : 'YOUR APP ID',
	});

	var router = new Router();

	Backbone.history.start();

});