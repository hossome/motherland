
	//get tab id
	
		//Take the Site and lookfor 2 tags:<a href="/bands/Nine-Inch-Nails/109/">Nine Inch Nails<img style="margin-left:4px;" src="/images/bandlink.png" border="0"></a>  and    
	//<span style="font-size:20px;">Hesitation Marks</span>  

chrome.extension.sendMessage({url: window.location.href}, function(response) {
   console.log(response.farewell);

	

});
	
var fromDOM = $('meta[name=keywords]').attr('content');

chrome.runtime.sendMessage({method:'setTitle',title:fromDOM});		