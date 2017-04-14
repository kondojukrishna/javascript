(function(){

	 /* var test10 = [55,44,5,78,64,54,568,42,6,874,2184,4521];
	for(var x = 0; x<test10.length;x++){
		console.log(test10[x]); // x=0 -> test[0]=55	
	} */
	
	/* var test15 = {
		"firstname" : 'krishna',
		"lastname":  'kanth'
		
	};
	for(var x in test15){
		consloe.log(test15[x]);
	}
	
	var test =[1,4,454,88];

	for(var i=0;i<test.length;i++){
	//check if the value at that index of array test is 2
	if(test[i] === 454){
	break;
	}
	console.log(test[i]);
	};
	
	//continue statement
	var i = 0;
	var n= 2;
	while(i<10){
		i++;
		if(i ===5){
			continue;
		}
	} */
	
	// if else statement
	var test2 = [55,88,7,79,44,5,88,786,545];
	test2.forEach(function(value,index){
		console.log('At' + index + 'index, the value is:' + value);
	});
	
	if(test2.length>10){
		console.log(true);
	}else{
		console.log(false);
	}
	
	//switch statement
	var name="krishna";
	
	switch (name){
		case 'viswa':{
			console.log('name is set to viswa');
		}
		case 'krishna':{
			console.log('name is set to krishna');
		} 
		default:{
			console.log('output is something else')
		}
	}

})();
//in js to increment by 1 we say x++, decrement its x--