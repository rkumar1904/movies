'use strict';
angular.module('myApp', [])
  .controller('MovieController', function($scope, $http) {
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Home";

    function fetch() {
      $http.get("https://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
        .then(function(response) {
          $scope.details = response.data;
        });

      $http.get("https://www.omdbapi.com/?s=" + $scope.search)
        .then(function(response) {
          $scope.related = response.data;
        });
    }

    $scope.update = function(movie) {
      $scope.search = movie.Title;
    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    }
  });
