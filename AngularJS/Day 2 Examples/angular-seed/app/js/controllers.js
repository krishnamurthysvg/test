'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('hotelsController', ['$scope', 'hotelDataProvider', function($scope,hotelDataProvider) {
	$scope.headerName = 'List of Hotels';

	//$scope.hotels = hotelDataProvider.hotels;
	hotelDataProvider.getHotels().then(function (data){
		$scope.hotels = data;
	});

	$scope.showHotelName = function(hotel)
	{
		alert(hotel.name);
	}

	$scope.increaseVote = function(hotel)
	{
		if(hotel.rating<10)
			hotel.rating = hotel.rating+ 1;
		else
			alert("You should not vote more than 10.");
	}

	$scope.upVote = function(hotel)
	{
		if(hotel.rating<9)
			hotel.rating = hotel.rating+ 1;
		else
			alert("You should not vote more than 9.");
	}

	$scope.downVote = function(hotel)
	{
		if(hotel.rating>1)
			hotel.rating = hotel.rating- 1;
		else
			alert("You should not vote less than 1.");
	}

	
}])
.controller('hotelDetailsCtrl', ['$scope','hotelDataProvider','$route','$routeParams', function($scope,hotelDataProvider,$route,$routeParams) {
	hotelDataProvider.getHotelDetails($routeParams.key).then(function (data){
		$scope.hotelDetails = data;
	});

	$scope.submitReview = function(hotel)
	{
		var key = $routeParams.key;
		/*hotelDataProvider.postComment(hotel.review).then(function (data){
			$scope.hotelDetails = data;*/

			$http.post('https://incandescent-fire-6901.firebaseio.com/hotelsList/'+key+'/comment',hotel.review).
			success(function(data, status, headers, config) {

				if(status==200)
					alert("New Hotel details saved successfully.");
			}).
			error(function(data, status, headers, config) {
				alert("There is problem to save hotel details.");
			});

	
	}

}])
.controller('newHotelController', ['$scope', '$http', function($scope, $http) {
	$scope.sendData = function(hotel,hotelForm)
	{
		//console.log(hotel);
		if(hotelForm.$valid)
			$http.post('https://incandescent-fire-6901.firebaseio.com/hotelsList.json',hotel).
			success(function(data, status, headers, config) {

				if(status==200)
					alert("New Hotel details saved successfully.");
			}).
			error(function(data, status, headers, config) {
				alert("There is problem to save hotel details.");
			});
	};
}])
.controller('MyCtrl2', ['$scope', function($scope) {

}]);