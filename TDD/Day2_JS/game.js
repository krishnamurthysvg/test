var Game = {
	create : function(){
		return {
			target : Math.floor(Math.random()*100),
			attempts : 0,
			message : null,
			play : function(guess){
				this.attempts++;
				if(guess < this.target)
					this.message = "Aim Higher";
				else if(guess > this.target)
					this.message = "Aim Lower";
				else
					this.message = "You've got it!!!";
			}
		};
	}
}