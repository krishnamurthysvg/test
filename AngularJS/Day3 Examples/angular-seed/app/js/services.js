'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
value('version', '0.1').
factory('hotelDataProvider', ['$http', '$q', function dataProvider($http, $q){

	var dataProvider = {
		getHotels : function(){

			var deferred = $q.defer();

			//$http({method: 'GET', url:'data/hotels.json'}).
			$http({method: 'GET', url:'https://incandescent-fire-6901.firebaseio.com/hotelsList.json'}).
			success(function(data, status, headers, config) {

				deferred.resolve(data);
			}).
			error(function(data, status, headers, config) {
				deferred.reject();
			});

			return deferred.promise;
		},

		getHotelDetails : function(key){

			var deferred = $q.defer();
			//$http({method: 'GET', url:'data/2.json'}).
			$http({method: 'GET', url:'https://incandescent-fire-6901.firebaseio.com/hotelsList/'+key+'.json'}).
			success(function(data, status, headers, config) {

				deferred.resolve(data);
			}).
			error(function(data, status, headers, config) {
				deferred.reject();
			});

			return deferred.promise;
		},
		postComment: function(key,comment)
		{
			$http.post('https://incandescent-fire-6901.firebaseio.com/hotelsList/'+key+'.json/comment').
			success(function(data, status, headers, config) {

				if(status==200)
					alert("New Hotel details saved successfully.");
			}).
			error(function(data, status, headers, config) {
				alert("There is problem to save hotel details.");
			});
		}


	}

	return dataProvider;


}]);

  /*
  factory('hotelDataProvider', function(){

return {
			hotels: [
			{
				name : 'Taj Banjara',
				rate : 15000,
				location : 'Banjara Hills',
				rating: 5,
				image: 'img/hotel2.jpg',
				review: "This is a <strong>great</strong> place."
			},
			{
				name : 'Mariott',
				rate : 35000,
				location : 'Tank Bund',
				rating: 8,
				image: 'img/hotel1.jpg',
				review: "This is a <strong>great</strong> place."
			},
			{
				name : 'WestIn',
				rate : 25000,
				location : 'Mindspace',
				image: 'img/hotel3.jpg',
				rating: 2,
				className: 'red',
				review: "This is a <strong>great</strong> place."
			},
			{
				name : 'Novotel',
				rate : 45000,
				location : 'Hitech City',
				image: 'img/hotel4.jpg',
				rating: 1,
				review: "This is a <strong>great</strong> place."
			},
			{
				name : 'Taj Krishna',
				rate : 44000,
				location : 'Hitech City',
				image: 'img/hotel1.jpg',
				rating: 5,
				review: "This is a <strong>great</strong> place."
			},
			{
				name : 'Awasa',
				rate : 42000,
				location : 'Hitech City',
				image: 'img/hotel2.jpg',
				rating: 6,
				review: "This is a <strong>great</strong> place."
			},
			{
				name : 'Ishta',
				rate : 40000,
				location : 'Hitech City',
				image: 'img/hotel3.jpg',
				rating: 8,
				review: "This is a <strong>great</strong> place."
			},
			{
				name : 'Swagat Inn',
				rate : 20000,
				location : 'Madhapur',
				image: 'img/hotel4.jpg',
				rating: 9,
				review: "This is a <strong>great</strong> place."
			}

			]
		}

	})*/
