describe("Guessing Game spec",function(){
	var game;
	beforeEach(function(){
		game = Game.create();
	});
	
	it("should not be null",function(){
		expect(game).not.toBe(null);
	});
	it("should have target generated in the beginning",function(){
		expect(game.target).not.toBe(undefined);
	});
	it("should have random number generated between 1 and 100",function(){
		expect(game.target >= 1 && game.target < 100).toBeTruthy();
	});
	it("should have attempts as 0 in the beginning",function(){
		expect(game.attempts == 0).toBeTruthy();
	});
	it("should have message as null in the beginning",function(){
		expect(game.message).toBe(null);
	});
	it("should return Aim Higher when the guess is lower than target",function(){
		game.target = 77
		var guess = 50;
		game.play(guess);
		expect(game.message).toBe("Aim Higher");	
	});
	it("should return Aim Lower when the guess is higher than target",function(){
		game.target = 77
		var guess = 80;
		game.play(guess);
		expect(game.message).toBe("Aim Lower");	
	});
	it("should return You've got it when the guess is equal to target",function(){
		game.target = 77
		var guess = 77;
		game.play(guess);
		expect(game.message).toBe("You've got it!!!");	
	});
	it("should have correct attempts",function(){
		game.target = 77
		game.play(50);
		game.play(75);
		game.play(77);
		expect(game.attempts).toBe(3);	
	});
});