angular.module("Day03Module")
.service("Day03Service", function () {
    this.greet = function (name) {
        return "Hi " + name;
    };
    this.bye = function (name) {
        return "Bye " + name;
    };
});