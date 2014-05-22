'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ngRoute',
	'ngSanitize',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers'
	]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/hotels', {templateUrl: 'partials/hotels.html', controller: 'hotelsController'});
	$routeProvider.when('/hotelDetails/:key', {templateUrl: 'partials/hotelDetails.html', controller: 'hotelDetailsCtrl'});
	$routeProvider.when('/newHotel', {templateUrl: 'partials/newHotel.html', controller: 'newHotelController'});
	$routeProvider.when('/hotelsCol', {templateUrl: 'partials/hotelsColumn.html', controller: 'hotelsController'});
	$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
	$routeProvider.otherwise({redirectTo: '/hotels'});
}]);
