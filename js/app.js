var app = angular.module('movie-searchApp', ['ngRoute'])

		app.config(function($routeProvider) {
			$routeProvider
				.when('/movies', {
					templateUrl: '../partials/index.html',
					controller: 'MainController'
				})
				.when('/movies/:id', {
					templateUrl: '../partials/show.html',
					controller: 'ShowController'
				})
				.otherwise({redirectTo : '/movies'})
		})
