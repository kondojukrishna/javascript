(function(){

	var text1 = 'krishna';
	var text2 = 'kanth';
	var output = text1+text2;
	console.log(output);
	
	var text = 'krishnakakakkkk';
	var x = text.replace('k','s');
	console.log(x);
	
	var helo = 'krishna   hacker';
	var he = text.charAt(9);
	
	console.log(he);
	
	var hey = 'krishna';
	console.log(hey.concat(' is a','','great'));
	
	var hix = 'krishna kanth';
	var newhix = text.substr(0,6);
	console.log(newhix);
	var newhix = text.substring(0,8);
	console.log(newhix);
	
	var text3 = 'krishna kanth';
	var text4 = 'kanth';
	
	var newhe= text3.match(text4);
	console.log(newhe);
	
	var text5 = 'krishna kanth is a hacker';
	console.log(text5.split(' '));
})();