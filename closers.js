function globalFunc(){
	var global = 'krishna';
	
	function localFunc(){
		var global = 'kanth';
		
		console.log(global);
	}
	localFunc()
}

globalFunc();
/* _____________________________________ */

function sum(){
	this.a = 1;
	this.b = 6;
	
	this.c = this.a + this.b; //c=1+6
	
	this.minus =  function(){
		this.a = 3;
		this.b = 1;
		
		this.c = this.a-this.b;
	}
	
}
	var result = new sum();
	console.log(result.c); 