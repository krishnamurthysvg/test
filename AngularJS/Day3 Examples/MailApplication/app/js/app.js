'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inbox', {templateUrl: 'mailcontent/inbox.html', controller: 'inboxController'});
  $routeProvider.when('/mailbody', {templateUrl: 'mailcontent/mailbody.html', controller: 'inboxController'});
  $routeProvider.otherwise({redirectTo: '/inbox'});
}]);
