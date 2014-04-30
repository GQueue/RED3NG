require.config({
	baseUrl: 'scripts/',

	paths: {
		angular: '../bower_components/angular/angular',
		ngRoute: '../bower_components/angular-route/angular-route',
		d3: '../bower_components/d3/d3',
		topojson: '../bower_components/topojson/topojson'
	},

	shim: {
		angular: {exports: 'angular'},
		ngRoute: ['angular']
	}
});

require(['angular', 'routes', 'app'], function(ng) {
	ng.bootstrap(window.document, ['app']);
});