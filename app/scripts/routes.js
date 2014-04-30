define(['app'], function(app) {
  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
        .when('/barchart', {templateUrl: 'views/barchart.html', controller: 'MainCtrl'})
        .when('/linechart', {templateUrl: 'views/linechart.html', controller: 'MainCtrl'})
        .when('/piechart', {templateUrl: 'views/piechart.html', controller: 'MainCtrl'})
        .when('/map', {templateUrl: 'views/map.html', controller: 'MainCtrl'})
        .otherwise({templateUrl: '404.html'});
  }]);
});