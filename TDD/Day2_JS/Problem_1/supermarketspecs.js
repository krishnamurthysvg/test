describe("Super Market specs", function()
{
	var market;
	beforeEach(function(){
		market = SuperMarket.create();
		market.price();
	});

	it("Market should not be null", function(){
		expect(market).not.toBe(null);
	});

	it("items should not be null in Market", function(){
		expect(market.items).not.toBe(null);
	});

	it("should contain A in items", function(){
		expect(market.items).toContain('A');
	});

	it("should contain B in items", function(){
		
		expect(market.items).toContain('B');
	});

	it("should contain C in items", function(){
		expect(market.items).toContain('C');
	});

	it("should contain D in items", function(){
		expect(market.items).toContain('D');
	});

	/*it("Should return 0 for no items", function(){
		market.items = null;
		expect(market.price()).toBe(0);	
	});*/

	it("Should return 50 for Item A", function(){
		expect(market.items['A']).toBe(50);	
	});

	it("Should return 30 for Item B", function(){
		expect(market.items['B']).toBe(30);	
	});

	it("Should return 20 for Item C", function(){
		expect(market.items['C']).toBe(20);	
	});

	it("Should return 15 for Item D", function(){
		expect(market.items['D']).toBe(15);	
	});

	it("Should return special price 130 if count is 3 for item A", function(){
		var a = market.specialprice('A',3);
		
		expect(a).toBe(130);	
	});

	xit("Should return special price 45 if count is 2 for item B", function(){
		var a = market.specialprice('B',2);
		
		expect(a).toBe(45);	
	});

	it("Should add item to cart", function(){
		market.addtocart('A');
		
		expect(market.cartItems).toContain('A');	
	});

	it("Should return 0 for no items in cart during billing", function(){
		market.cartItems = null;
		expect(market.makeBill()).toBe(0);	
	});

	xit("Should return calculated price for items in cart during billing", function(){
		market.addtocart('A');
		market.addtocart('A');
		market.addtocart('A');
		market.addtocart('B');
		market.addtocart('B');
		var totalBill = market.makeBill();
		console.log(totalBill);
		expect(totalBill).not.toBe(0);	
	});



})