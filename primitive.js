/* this how you write a comment */
/* numebr primitive type */
var a = 10;
var b = 10.5;

/* string primitive type */
var firstName = 'krishna';
var lastName = 'kanth';

/* boolean primitive type */
var isHTMLLoaded =  false;
var isCssLoaded = true;

/* null primitive type */
var x = null;

/*undefined primitive type  */
var y = undefined;

console.log(a);
console.log(firstName);
console.log(isHTMLLoaded);
console.log(x);
console.log(y);
/* ================================================================================ */
	/* objects */
	
var x = {
		firstName : 'krishna',
		rollnumber: 25,
		isPresent: false,
		isSuspended:null,
		y: {
		lastName: 'kanth',
			z: {
				firstName: 'tinku',
				rollnumber: 28	
			}
			
		}
};

var a = {
		firstName: 'hi',
		lastName: 'kondoju'	
}
	console.log(x);
	console.log(a);


/* i want to change the firstname krishna to hacker */
//dot notation

	x.firstName = 'hacker';
	x.y.lastName = 'cyber';
	x.y.z.firstName = 'chandu';

	//x->y ->firstname
	
	console.log(x);
	
//property notation
//the draw back of property is that we can not targer inner objects.
//property notation is only used to update the primitive data types
x['firstName'] = 'chandrika';
//x[y['lastName']] = 'reddy';
x.y['lastName'] = 'reddy';

//x[y[z['fullName']]] = 'chandrika reddy';
x.y.z['fullName'] = 'chandrika reddy';
console.log(x);
/* ========================================================================== */

var test = 44;
console.log(test); //output is: 44

test = 55;
console.log(test); //output is: 55
/* ========================================================================= */
/* functions */
//named functions
	function addition(){
		//create a variable x and intialize it to 1
		var x = 1;
		
		//create another variable y and intialize it to (x+1)=2
		var y = x+1;
		//return y
		return y;
    }

console.log(addition());

//anonymous functions-- it holeds entire function
var a = function(){
	var x = 1;
	var y = x+1;
	var test = {
		firstName: 'krishna',
		rollNo: 33
	};
	return (test.firstName); // output" krishna
};

console.log(a());

var b = 55;
console.log(b);

var tes = addition();
console.log(tes);
/* gloabl */
var global = 100;
 
 function kris(){
	 var local = 33;
	 console.log(global);
	 console.log(local);
	 
 }

kris();
console.log(local);
/* ================================ */
//iife function exmple
(function(){
	 //defining a function
	  function addition(a,b){
		 
		 var sum = a + b;
		 
		 return sum;
	 
	 
 };
	//calling function
	var output = addition(15,22);
console.log(output); //37
 })();
 
/* ===================================== */

(function(){
	//sample class
	function addition(fName,lName){
		this.firstName: fName;
		this.lastName: lName;
		this.rollnumber:  199
		
	}
	//result
	/* 
		addition={
			firstname: 'krishna'
			lastName: 'kanth'
			rollnumber: 199
		};
	*/
	var output = new addition();
	var output2 = new addition(); 
	
})();
/* ==================================== */
(function()){
	//this class is now an object that can be reused any number of times
	function x(){
		this.firstName: 'krishna';
		this.lastName: 'kanth';
		
	};
	console.log(x());
	//create a new instance of x object (class x)
	var y = new x();
	y.firstName = 'viswa';
	y.lastName = 'kandi';
	
	console.log(y);
	
	var z = new x();
	y.firstName = 'john';
	y.lastName = 'doe';
	
	console.log(z);
}();









