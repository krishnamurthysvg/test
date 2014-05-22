'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('hotelsController', ['$scope', function($scope) {
	$scope.headerName = 'List of Hotels';

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

	$scope.hotels = [
	{
		name : 'Taj Banjara',
		rate : 15000,
		location : 'Banjara Hills',
		rating: 5,
		image: 'http://i.imgur.com/vmviDYS.jpg'
	},
	{
		name : 'Mariott',
		rate : 35000,
		location : 'Tank Bund',
		rating: 8,
		image: 'http://i.imgur.com/ib6YKfv.jpg'
	},
	{
		name : 'WestIn',
		rate : 25000,
		location : 'Mindspace',
		image: 'http://i.imgur.com/e6CnwW4.jpg',
		rating: 2,
		className: 'red'
	},
	{
		name : 'Novotel',
		rate : 45000,
		location : 'Hitech City',
		image: 'http://i.imgur.com/fsmniCe.jpg',
		rating: 1
	},
	{
		name : 'Taj Krishna',
		rate : 44000,
		location : 'Hitech City',
		image: 'http://i.imgur.com/fsmniCe.jpg',
		rating: 5
	},
	{
		name : 'Awasa',
		rate : 42000,
		location : 'Hitech City',
		image: 'http://i.imgur.com/fsmniCe.jpg',
		rating: 6
	},
	{
		name : 'Ishta',
		rate : 40000,
		location : 'Hitech City',
		image: 'http://i.imgur.com/fsmniCe.jpg',
		rating: 8
	},
	{
		name : 'Swagat Inn',
		rate : 20000,
		location : 'Madhapur',
		image: 'http://i.imgur.com/fsmniCe.jpg',
		rating: 9
	}

	]

}])
.controller('MyCtrl2', ['$scope', function($scope) {

}]);