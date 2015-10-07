angular.module("HelloAng").
controller("HelloAngCtrl",function($scope,HelloAngService){
	$scope.greet = function(){
		$scope.result = HelloAngService.sayHello($scope.name);
	};
	$scope.bidadieu = function(){
		$scope.result = HelloAngService.sayBye($scope.name);
	}
});