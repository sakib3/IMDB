'use strict';

angular.module("movieDB.catalog", ['ui.bootstrap'])
		.controller('catalogCtrl', ['$scope', 'movieAPIService',function($scope,movieAPIService){
			$scope.currentPage =1;
			$scope.pageSize =12;
			movieAPIService.getMovies().success(function(data){
				$scope.movieList = data;
			});
		}])