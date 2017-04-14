function addition(){
 var x = 1;
 var y = 2;
 return(x+y);

};
//var addition = 5;
console.log(addition);
console.log(addition());

var addition = function(){
	var x =1;
	return(x+1); //output:2
	
};
addition();


var global = 100; // global variable

function test(){
	var local = 33;
	
	console.log(global); 
	console.log(local);  //local variable
	return local;
};


console.log(global);
console.log(local); // we canot call out side the function local variable
/* ================================================================ */
//iife contrauct

(function(){
	var global = 100;
	
	function addition(){
		var local = 10;
		
		console.log(gloabal); // 100
		console.log(local);// 10
		
	}
	addition();
	console.log(global); //100
	console.log(local); //error not define
	
})();

//immediately invoke function exrpession

//syntax :

(function(){
	
	
})();
 
/* ============================== */

 
