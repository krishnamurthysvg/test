angular.module("HelloAng").
service("HelloAngService",function(){
	this.sayHello = function(name){
		return "Hello " + name;
	};
	this.sayBye = function(name){
		return "Bye Bye " + name;
	}
});