describe("HelloAngService",function(){
	var helloAngServiceObj;
	beforeEach(function(){
		module("HelloAng");
		inject(function(_HelloAngService_){
			helloAngServiceObj = _HelloAngService_;
		});
	});
	it("is a setup test",function(){
		expect(helloAngServiceObj).not.toBe(undefined);
	});
	it("should say hello given name",function(){
		var output = helloAngServiceObj.sayHello("Ram");
		expect(output).toBe("Hello Ram");
	});
	it("should say bye for a given name",function(){
		var output = helloAngServiceObj.sayBye("Ram");
		expect(output).toBe("Bye Bye Ram");
	});	
	
	
	
	
	
});