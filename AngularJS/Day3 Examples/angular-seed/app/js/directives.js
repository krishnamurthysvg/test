'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive('appVersion', ['version', function(version) {
	return function(scope, elm, attrs) {
		elm.text(version);
	};
}])
.directive('mySample', function() {
	return 	{
		/*link: function(scope, element, attrs, controller) {
			var markup = "<input type='text' ng-model='sampleInfo'> <br>{{sampleInfo}}";
			var compiled = $compile(markup)(scope);

			angular.element(element).append(compiled);*/

			restrict: 'AEC',
			template: "<input type='text' ng-model='sampleInfo'> <br>{{sampleInfo}}<br><br>",
			scope: {

			}
		
	}	
})
.directive('hotelSummary', function() {
	return 	{
			restrict: 'E',
			templateUrl: "templates/hotelSummary.html",
			scope: {
				targetHotel: "=hotel"
			}
		
	}	
})
.directive('rating', function() {
	return 	{
			restrict: 'E',
			templateUrl: "templates/rating.html",
			scope: {
				score:"=",
				up: "&",
				down:"&"
			}
		
	}	
})
.directive('dateKeys', function() {
	return 	{
				restrict: 'A',
				link: function(scope, element, attrs, controller) {
					element.on('keydown', function(event){

					})
				}
			}	
})
.directive('preview', function() {
	return 	{
				restrict: 'E',
				templateUrl: "templates/preview.html",
				scope: {
					imageUrl:"="
				}
			}	
})

