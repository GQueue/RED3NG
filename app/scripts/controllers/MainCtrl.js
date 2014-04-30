define(['controllers/module'], function(controllers) {
  controllers.controller('MainCtrl', ['$scope', '$http', '$q', function($scope, $http, $q) {

    // used by bar chart and line chart.
    $scope.data = [
      {"y":15, "x":1},
      {"y":11, "x":2},
      {"y":17, "x":3},
      {"y":18, "x":4},
      {"y":6, "x":5},
      {"y":12, "x":6},
      {"y":9, "x":7},
      {"y":5, "x":8},
      {"y":2, "x":9},
      {"y":11, "x":10}
    ];

    $scope.piechartData = [
      {pet: 'Cats', votes: 30},
      {pet: 'Dogs', votes: 60},
      {pet: 'Unicorns', votes: 100}
    ];

    $scope.getMapData = function() {
      var deferred = $q.defer();

      $http.get('data/us.json').success(function(data) {
        deferred.resolve(data);
      });

      return deferred.promise;
    }
  }]);
});