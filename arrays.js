(function(){
	var alpha = 
	[{
		firstName: 'krishna',
		lastName: 'kanth'
	},
	{
		firstName:'hello',
		lastName:'world'
	}];
	
	var beta = ['kanth',54,false,null]; //beta has 4 
	console.log(alpha);
	beta[1] = 'hacker';
	console.log(beta[1]);
	console.log(alpha[0].firstName);

	/* another way to create arrays */
	var omega = new Array();
	
	omega[0] = 'world';
	omega[1] = 'hello';
	omega[2] = 'hey';
	console.log(omega);
	console.log(omega.length);// output is 3
	/* 
		function Array(){
			this
		}
		
		omega = {
			concat:
			
		}


	*/
	var delta = 55;
	console.log(Array.isArray(omega)); //true
	console.log(Array.isArray(delta)); //false
	/* ============================================ */
	
	var a = ['krishna','kanth'];
	//a[3]= 'helo'; this not going to work
	a.push('bumika'); // adding an array using push
	console.log(a);
	/* ============================================ */
	var b = ['krishna','kanth','tinku','munni'];
	b.pop(); //  removing using pop
	console.log(b);
	/* ============================================ */
	var c = ['neha','harsha'];
	c.unshift('somu'); // adding in 0 th element
	console.log(c);
	/* ============================================ */
	var d = ['neha','harsha'];
	d.shift(); // removing in 0 th element
	console.log(d);
	/* ============================================ */
	var e = ['srikar','krishna','ramu','boomika','munni'];
	//to add
	e.splice(1,2,'shastry'); // replace
	console.log(e);

	//to remove
	e.splice(4,1); //remove
	console.log(e); // munni removed
	/* ============================================ */
	var f = ['srikar','krishna','ramu','boomika','munni'];
	
	console.log(f.indexOf('boomika')); // saying index number
	/* ============================================ */
	var g = ['krishna','kanth','hacker'];
	var h = ['munni','tinku'];
	var i = g.concat(h);
	console.log(i);
	/* ============================================ */
	//this function will check for value. if it is not equal to krishna then return true or false
	function filterOut(value){
		//check if value is not qural to krishna
		return (value !== 'krishna'); // return true or false
	}
	var j = ['srikar','krishna','ramu','boomika','munni','krishna'];
	var k = j.filter(filterOut)
	console.log(k);
	/* 
		j = ['srikar','ramu','boomika','munni'];
	*/
	/* ============================================ */
	var hacker = ['srikar','krishna','ramu','boomika','munni','krishna'];
	console.log(hacker.join(' % '));
	/* ----------------------------------------------- */
})();