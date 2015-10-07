describe("hello specs", function(){

	it("should print hello to a given name", function(){
		var message = sayHello("sam");

		expect(message).toBe("Hello sam");
	})

	it("should print bye to a given name", function(){
		var message = sayBye("sam");

		expect(message).toBe("Bye Bye sam");
	})


})