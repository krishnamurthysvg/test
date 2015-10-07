var SuperMarket = {
	create : function(){
		return {

			items: ['A', 'B', 'C', 'D'],
			cartItems: [],
			price: function(){
				if(this.items)
				{
					this.items['A'] = 50;
					this.items['B'] = 30;
					this.items['C'] = 20;
					this.items['D'] = 15;
				}
				
			},
			specialprice: function(item, count){
				var price;
				for(var i in this.items)
				{
					if(this.items[i]==item)
					{
						if(item=='A' && count==3)
							price = 130;
						else if(item=='B' && count==2)
							price = 45;

					}
				}
				return price;
			},
			addtocart: function(item){
				if(item)
				{
					this.cartItems.push(item);
				}
			},
			makeBill: function(){
				//this.price();

				if(this.cartItems)
				{
					var count = {};

					for(var i = 0; i< this.cartItems.length; i++) {
					    //var num = this.cartItems[i];
					    count[this.cartItems[i]] = count[this.cartItems[i]] ? count[this.cartItems[i]]+1 : 1;
					

							/*for(var j=0; j<=this.items.length; j++){
								if(this.cartItems[i] == this.items[j]){
									if(count[this.cartItems[i]] == 3 && this.cartItems[i] == "A") {
										this.specialprice(this.cartItems[i], count);
									}
									else
									{
										return this.items[j]*count[this.cartItems[i]];
									}
									
								}*/
						}
						console.log(count);


						for(var j=0; j<=this.items.length; j++){

							if(this.cartItems[j] == this.items[j]){
								if(count[this.cartItems[j]] == 3 && this.cartItems[j] == "A") {
									this.specialprice(this.cartItems[j], count[j]);
								}
								else
								{
									return count[j]*count[this.cartItems[j]];
								}
							}

						}
						/*for(var j=0; j<=this.items.length; j++){
							if(this.cartItems[i] == this.items[j]){
								if(count[this.cartItems[i]] == 3 && this.cartItems[i] == "A") {
									this.specialprice(this.cartItems[i], count);
								}
								else
								{
									return this.items[j]*count[this.cartItems[i]];
								}
								
							}
					}	*/
				}
				else
				{
					return 0;
				}
			}
			
		};
	}
}