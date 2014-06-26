// Generated by CoffeeScript 1.7.1
(function() {
  var omdbSearcher;

  omdbSearcher = angular.module('omdbSearcher', []);

  omdbSearcher.controller('MovieController', [
    '$scope', '$http', function($scope, $http) {
      $scope.movieList = [];
      $scope.search = function(movie) {
        return $http({
          method: "GET",
          url: "http://www.omdbapi.com/",
          params: {
            s: movie
          }
        }).success(function(data, status, headers, config) {
          return $scope.movieList = data.Search;
        }).error(function(data, status, headers, config) {
          return console.log("unable to find movie");
        });
      };
      return $scope.showDetails = function(movie) {
        return $http({
          method: "GET",
          url: "http://www.omdbapi.com/",
          params: {
            i: movie.imdbID
          }
        }).success(function(data, status, headers, config) {
          $scope.movieDetails = data;
          return console.log($scope.movieDetails);
        }).error(function(data, status, headers, config) {
          return console.log("unable to find info");
        });
      };
    }
  ]);

}).call(this);
