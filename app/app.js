'use strict';

angular.module("movieDB",[
			'ngRoute',
			'movieDB.movie',
			'movieDB.genre',
			'movieDB.catalog',
			'movieDB.paginate-filter',
			'movieDB.movie-service'
		])

	   .config(['$routeProvider',function($routeProvider){
	   		$routeProvider
	   					.when("/",{templateUrl: "catalog/catalog.html", controller: "catalogCtrl"})
	   					.when("/movie/:id",{templateUrl: "movie/movie.html", controller: "movieCtrl"})
	   					.when("/genre/:genreName",{templateUrl: "catalog/catalog.html", controller: "genreCtrl"})
					   	.otherwise({ redirectTo: "/"});
	   }]);
