


$(function(){
									 
	var flag;
	var pageurl = null;						
	var regexp='http://www.sputnikmusic.com/review/';
	// localhost/satellilte/repro.php
	var info;							
											
	chrome.tabs.query({active: true,currentWindow:true}, function (tabs) {
		pageurl = tabs[0].url;
		flag=pageurl.match(regexp);
		document.write(pageurl);
		document.write("<br>");
												
		if(flag == 'http://www.sputnikmusic.com/review/')
		{
			document.write("Sucess");
			//request  "http://mother.herokuapp.com/repro.php"
			chrome.runtime.sendMessage({method:'getTitle'}, function(response){
			  document.write("<br>"); 
			 // document.write(response); 
				info=response;
				console.log(response);
		});
				
										
		}
		else
		{
			document.write("\n You are not on Sputnik Music");
														
		}
										
	});									
	
										

										
});
			 
				


						
						
						
		
				
					/*
					//remove after finished testing
					
					
						//request  "http://mother.herokuapp.com/repro.php"
						var request = $.ajax({
							url: "http://localhost/satellilte/repro.php",
							data: {URL : pageurl},
							type: "POST",            
							dataType: "html",
							crossDomain: true
							
						
						});
	 
						request.done(function(msg) {
							$("#mybox").html(msg);          
						});
	 
						request.fail(function(jqXHR, textStatus) {
							alert( "Request failed: " + textStatus );
						});
						else if(flag == null)
							document.write("You need to be on sputnik to make this work");
                
					}
					

function write_result(needanurl){
						document.write(needanurl);
					}
					
					*/