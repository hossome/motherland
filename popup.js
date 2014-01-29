
var pageurl = null;

$(document).ready(function(){
					
					var myCall=function(){
										 
										 var flag;
										
										 var regexp='http://www.sputnikmusic.com/review/';
										// localhost/satellilte/repro.php
										
											
										chrome.tabs.query({active: true,currentWindow:true}, function (tabs) {
											pageurl = tabs[0].url;
											flag=pageurl.match(regexp);
												document.write(pageurl);
												document.write("<br>");
												
												if(flag == 'http://www.sputnikmusic.com/review/')
												{
															//document.write("Sucess");
														
															//request  "http://mother.herokuapp.com/repro.php"
																
										
												}
												else
												{
														document.write("\n You are not on Sputnik Music");
														
												}
										
										
										});
										
			
											
												
					}	
							
					myCall();
					
					
										
												//write_result(pageurl);
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