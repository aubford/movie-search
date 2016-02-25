app.controller('MainController', ['$scope', function($scope){

	$scope.search = function(query){
		$http.get('http://www.omdbapi.com/?s'+query).then(function(results){
			console.log(results);
		})
	}

}])


app.controller('IndexController', ['$scope', function($scope){


		}])
