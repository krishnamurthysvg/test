'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('inboxController', ['$scope', function($scope) {
  	$scope.messages = [
  		{
  			date: "21/05/2014",
  			from:"Some",
  			subject:"fsdjka",
  			content:"fdsajkh klsdaj jklhfgasd jk"
  		},
  		{
  			date: "22/05/2014",
  			from:"Some2",
  			subject:"dfhgdf ",
  			content:"fgjh fgdjfd"
  		},
  		{
  			date: "23/05/2014",
  			from:"Some3",
  			subject:"sdfjklhn",
  			content:"sdfaf dfhnv fgxfg"
  		}


  	];

  	$scope.openEmmail = function(message)
  	{
  		$scope.msg = message;
  	}
  }])
  .controller('emailController', ['$scope', function($scope) {
  		$scope.openEmail = function(message)
  		{
  			$scope.message = {
  				date: "21/05/2014",
	  			from:"Some",
	  			subject:"fsdjka",
	  			content:"fdsajkh klsdaj jklhfgasd jk"
  			};
  		}
  }]);
