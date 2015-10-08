angular.module("Day03Module")
.controller("Day03Controller", function ($scope, Day03Service) {
    $scope.greet = function () {
        $scope.message = Day03Service.greet($scope.name);
    };
    $scope.bye = function () {
        $scope.message = Day03Service.bye($scope.name);
    };

});