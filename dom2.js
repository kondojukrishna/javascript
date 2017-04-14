//construct the IIFE by passing the window object
//window is the global object
(function(window){
	/* window.dontNavigate =  function(event){
		event.preventDefault();
		console.log('i was stopped');
		
	}; */
	
	//i need to capture the anchor tag and then apply/listen the click event

	var anchor = window.document.getElementByTagName('a')
	anchor.addEventListener('click',)

})(window);