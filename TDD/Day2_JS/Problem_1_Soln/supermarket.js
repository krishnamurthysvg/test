var PriceCalculator = function(superMarketRef){
	var superMarket = superMarketRef;
	this.getSuperMarket = function(){
		return superMarket;
	};
	var checkOfferPriceAndRemainingQuantity = function(itemName,quantity){
		var offers = superMarket.getOffers();
	 	var offerPriceAndRemainingQuantity;
		// var offers = offers.filter(function(it){
// 			return it.name == itemName;
// 		});
		
		
	 	for (var i = 0; i < offers.length; i++) {
	 		var offer = offers[i];
	 		if(offer.name == itemName){
				if(quantity == offer.quantity){
					offerPriceAndRemainingQuantity = {};
					offerPriceAndRemainingQuantity.price = offer.price;
					offerPriceAndRemainingQuantity.remainingQuantity = 0;
				}
				else if(quantity > offer.quantity){
					offerPriceAndRemainingQuantity = {};
					offerPriceAndRemainingQuantity.price = offer.price;
					offerPriceAndRemainingQuantity.remainingQuantity = 
					quantity - offer.quantity;
				}
	 			break;
	 		}
	 	}
		return offerPriceAndRemainingQuantity;
	};
	this.computeTotal = function(shoppingCart){
		var totalPrice = 0;
		var baseItems = superMarket.getItems();
		var items = shoppingCart.getItems();
		for(var itemName in items){
			for(var i=0;i<baseItems.length;i++){
				var baseItem = baseItems[i];
				if(itemName == baseItem.name){
					var offerPriceAndRemainingQuantity = checkOfferPriceAndRemainingQuantity(itemName,items[itemName]);
					if(offerPriceAndRemainingQuantity == undefined){
						totalPrice += items[itemName] * baseItem.unitprice;
					}
						
					else{
						totalPrice += offerPriceAndRemainingQuantity.price;
						if(offerPriceAndRemainingQuantity.remainingQuantity != 0){
							totalPrice += offerPriceAndRemainingQuantity.remainingQuantity * baseItem.unitprice;
						}
							
					}
						
				}
			}
		}
		return totalPrice;
	}
}
var ShoppingCart = function(){
	var items = [];
	this.add = function(item){
		if(items[item] == undefined)
			items[item] = 1
		else 
			items[item] += 1;	
	};
	this.getItems = function(){
		return items;
	};
	this.size = function(itemName){
		if(itemName == undefined){
			var totalSize = 0;
			for(var name in items){
				totalSize += items[name];
			}
			return totalSize;
		}
		return items[itemName];
	};
};
var SuperMarket = function(){
	var itemsCollection = [];
	var offersCollection = [];
	
	this.initializeItems = function(items){
		itemsCollection = items;
	};
	this.initializeOffers = function(offers){
		offersCollection = offers;
	};
	this.getOffers = function(){
		return offersCollection;
	};
	this.getItems = function(){
		return itemsCollection;
	};
};