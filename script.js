//iife construct
(function(){
	
	//access to element - h1 we can use inbuilt object call named as getElementById
		//var x = getElementById('cons');
	
	//console.log(window);
	
	
	console.log(document.getElementById('cons'));
	console.log(document.getElementsByClassName('pu'));
	console.log(document.getElementsByTagName('P'));

	//querySelector
	console.log(document.querySelectorAll('[data-srikar="viswa"]'));
	
	
	Sform = function(){
		var firstname = document.getElementById('fName');
		var lastname = document.getElementById('lName');
		
		console.log('FirstName' + firstname + 'LastName' + lastname);
		
		
	};
	
	
	// for stoping the default click event
	
	document.dontNavigate = function(event){
		//this will prevent the fefault action
		//i.e navigating to google.com
		event.preventDefault();
		console.log('i was stoped');
	};
   
	
	
})();

/*
    window = {
        document: {
            getElementById: function(){
            },
            getElementsByClassName: function(){
            }
        }
    }
*/
