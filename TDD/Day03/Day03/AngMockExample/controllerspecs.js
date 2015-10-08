describe("Day03Controller specs", function () {
    var $controller;
    beforeEach(function () {
        module("Day03Module");
        inject(function (_$controller_) {
            $controller = _$controller_;
        });
    });

    it("should call bye", function () {
        var $scope = {};
        var day03ServiceMock = {
            bye: function () { }
        };
        spyOn(day03ServiceMock, "bye").and.returnValue("Bye Ram");
        var day03Ctrl = $controller("Day03Controller", {
            $scope: $scope,
            Day03Service: day03ServiceMock
        });
        $scope.name = "Ram";
        $scope.bye();
        expect($scope.message).toBe("Bye Ram");
        expect(day03ServiceMock.bye).toHaveBeenCalledWith("Ram");

    });

    it("should call greet", function () {
        var $scope = {};
        var day03ServiceMock = {
            greet: function () { }
        };
        //Moq 
        //mock.SetUp(f=>f.greet("Ram").Returns("Hi Ram");
        spyOn(day03ServiceMock, "greet").and.returnValue("Hi Ram");
        var day03Ctrl = $controller("Day03Controller", {
            $scope: $scope,
            Day03Service: day03ServiceMock
        });
        $scope.name = "Ram";
        $scope.greet();
        expect($scope.message).toBe("Hi Ram");
        //Moq 
        //mock.Verify(f=>f.greet("Ram"),Times.Once);
        expect(day03ServiceMock.greet).toHaveBeenCalledWith("Ram");

    });
    it("is a setup spec", function () {
        expect($controller).not.toBe(undefined);
    });
});