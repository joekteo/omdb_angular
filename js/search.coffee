omdbSearcher = angular.module 'omdbSearcher', []

omdbSearcher.controller 'MovieController', ['$scope', '$http', ($scope, $http)->
  $scope.movieList = []

  $scope.search = (movie) ->
    $http(
      method: "GET",
      url: "http://www.omdbapi.com/",
      params: {s: movie}
    ).success( (data, status, headers, config) ->
      $scope.movieList = data.Search
      # console.log "it's finally working!"
    ).error (data, status, headers, config) ->
      console.log "unable to find movie"

  $scope.showDetails = (movie) ->
    $http(
      method: "GET",
      url: "http://www.omdbapi.com/",
      params: {i: movie.imdbID}
    ).success( (data, status, headers, config) ->
      $scope.movieDetails = data
      console.log $scope.movieDetails
    ).error (data, status, headers, config) ->
      console.log "unable to find info"
]