app.controller('MainController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	var query = $scope.query
	if (!($scope.query)) {$scope.query=""}
	$scope.search = function(query){
		$http.get('http://www.omdbapi.com/?s='+query).then(function(results){
			$scope.movies = results.data.Search
		})
	}

}])


app.controller('ShowController', ['$scope', '$http', '$routeParams', function($scope,$http,$routeParams){

	$http.get('http://www.omdbapi.com/?i='+$routeParams.id).success(function(results){
		$scope.showMovie = results
	})


}])
