(function(){
	function substract(a,b){
		var output = a - b;
		
		return {
			out: output
		}
	}
	var alpha = substract(5,3); //result now holds an object with property out
	
	var beta=Object.create(alpha);
	beta.out2= substract(10,1); // bet is now inheriting the property of alpha
	console.log(beta.out2);
})();