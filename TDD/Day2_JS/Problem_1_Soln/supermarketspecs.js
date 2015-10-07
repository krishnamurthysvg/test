describe("Checkout",function(){
	var shoppingCart, superMarket, priceCalculator;
	beforeEach(function(){
		shoppingCart = new ShoppingCart();
		superMarket = new SuperMarket();
		var items = [
			{name:"A",unitprice:50},
			{name:"B",unitprice:30},
			{name:"C",unitprice:20},
			{name:"D",unitprice:15},
		];
		superMarket.initializeItems(items);
		var offers = [
			{name:"A",quantity:3, price:130},
			{name:"B",quantity:2, price:45}
		];
		superMarket.initializeOffers(offers);
	});
	beforeEach(function(){
		priceCalculator = new PriceCalculator(superMarket);
	});
	it("should have the proper set up",function(){
		expect(priceCalculator).not.toBe(undefined);
		expect(priceCalculator.getSuperMarket()).not.toBe(undefined);
		expect(superMarket.getItems()).not.toBe(undefined);
		expect(superMarket.getOffers()).not.toBe(undefined);
		expect(shoppingCart).not.toBe(undefined);
	});
	it("should return the price for one item without offer",function(){
		shoppingCart.add("A");
		var total = priceCalculator.computeTotal(shoppingCart);
		expect(total).toBe(50);
	});
	it("should return the price for two items without offer",function(){
		shoppingCart.add("A");
		shoppingCart.add("A");
		var total = priceCalculator.computeTotal(shoppingCart);
		expect(total).toBe(100);
	});
	it("should return the price for three items with offer",function(){
		shoppingCart.add("A");
		shoppingCart.add("A");
		shoppingCart.add("A");
		var total = priceCalculator.computeTotal(shoppingCart);
		expect(total).toBe(130);
	});
	it("should compute price for 4 items where 3 items have offer and one doesn't",function(){
		shoppingCart.add("A");
		shoppingCart.add("A");
		shoppingCart.add("A");
		shoppingCart.add("A");
		var total = priceCalculator.computeTotal(shoppingCart);
		expect(total).toBe(180);
	});
	xit("should compute price for 6 items where every 3 items has offer",function(){
		shoppingCart.add("A");
		shoppingCart.add("A");
		shoppingCart.add("A");
		shoppingCart.add("A");
		shoppingCart.add("A");
		shoppingCart.add("A");		
		var total = priceCalculator.computeTotal(shoppingCart);
		expect(total).toBe(260);
	});
});
describe("build shopping cart",function(){
	var shoppingCart;
	beforeEach(function(){
		shoppingCart = new ShoppingCart();
	});
	it("should not be undefined",function(){
		expect(shoppingCart).not.toBe(undefined);
	});
	it("should add an item once",function(){
		shoppingCart.add("A");
		expect(shoppingCart.size()).toBe(1);
	});
	it("should get the added items",function(){
		shoppingCart.add("A");
		var items = shoppingCart.getItems();
		expect(items["A"]).toBe(1);
	});
	it("should add an item twice",function(){
		shoppingCart.add("A");
		shoppingCart.add("A");
		expect(shoppingCart.size()).toBe(2);
	});
	it("should add two items twice",function(){
		shoppingCart.add("A");
		shoppingCart.add("A");
		shoppingCart.add("B");
		shoppingCart.add("B");
		expect(shoppingCart.size("A")).toBe(2);
		expect(shoppingCart.size("B")).toBe(2);
	});
	it("should add lot of items in different order",function(){
		shoppingCart.add("A");
		shoppingCart.add("C");
		shoppingCart.add("A");
		shoppingCart.add("B");
		shoppingCart.add("C");
		shoppingCart.add("C");
		shoppingCart.add("A");

		expect(shoppingCart.size("A")).toBe(3);
		expect(shoppingCart.size("B")).toBe(1);
		expect(shoppingCart.size("C")).toBe(3);
	});
});
describe("build super market pricing and offers",function(){
	var superMarket;
	beforeEach(function(){
		superMarket = new SuperMarket();
	});
	it("should not be undefined",function(){
		expect(superMarket).not.toBe(undefined);
	});
	it("should have the items and their unit prices initialized",function(){
		var items = [
			{name:"A",unitprice:50},
			{name:"B",unitprice:30},
			{name:"C",unitprice:20},
			{name:"D",unitprice:15},
		];
		superMarket.initializeItems(items);
		expect(superMarket.getItems()).toBe(items);
		expect(superMarket.getItems().length).toBe(4);
	});
	
	it("should have offers initialized",function(){
		var offers = [
			{name:"A",quantity:3, price:130},
			{name:"B",quantity:2, price:45}
		];
		superMarket.initializeOffers(offers);
		expect(superMarket.getOffers()).toBe(offers);
	});
});