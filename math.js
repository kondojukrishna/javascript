//IIFE CONSTRUCT
(function(){
	//class - total
	function Total(){
		//reference the 'this' keyword
		var tot = this;
		
		//class - mathemetics
		function Mathematics(num1, num2){
			var math = this;
			
			math.sum = function(){
				return (num1+num2);
			};
			
			math.difference = function(){
				return (num1 - num2);
				
			};
			
			math.multiplication = function(){
				return (num1*num2);
			};
			
			math.division = function(){
				return (num1 / num2);
				
			};
		}
		
		var operations = new Mathematics(99, 22);
		
		tot.addition = operations.sum();
		tot.difference = operations.difference();
		tot.product= operations.multiplication();
		tot.division= operations.division();
	} 
	var result = new Total();
	console.log(result);
})();