
	//get tab id
	
		//Take the Site and lookfor 2 tags:<a href="/bands/Nine-Inch-Nails/109/">Nine Inch Nails<img style="margin-left:4px;" src="/images/bandlink.png" border="0"></a>  and    
	//<span style="font-size:20px;">Hesitation Marks</span>  

chrome.extension.sendMessage({url: window.location.href}, function(response) {
 // console.log(response.farewell);

	

});



//find specific meta data	
var fromDOM = $('meta[name=keywords]').attr('content');
var url="https://localhost/satellite/digg.php";

//Retrive Tracklist
//search for track list dom
var tracklist=$('a:contains("Tracklist")').attr("onclick");
/*
var regexp='"(\\/tracklist\\.php).*? "'
var match=tracklist.match(regexp);
*/

var re1='.*?';	// Non-greedy match on filler
var re2='(\\/)';	// Any Single Character 1
var re3='(tracklist\\.php)';	// File Name 1
var re4='(\\?)';	// Any Single Character 2
var re5='(albumid)';	// Word 1
var re6='(=)';	// Any Single Character 3
var re7='(\\d+)';	// Integer Number 1

var p = new RegExp(re1+re2+re3+re4+re5+re6+re7,["i"]);
var m = p.exec(tracklist);
if (m != null)
{
    var c1=m[1];
    var file1=m[2];
    var c2=m[3];
    var word1=m[4];
    var c3=m[5];
    var int1=m[6];
    //document.write("("+c1.replace(/</,"&lt;")+")"+"("+file1.replace(/</,"&lt;")+")"+"("+c2.replace(/</,"&lt;")+")"+"("+word1.replace(/</,"&lt;")+")"+"("+c3.replace(/</,"&lt;")+")"+"("+int1.replace(/</,"&lt;")+")"+"\n");
	var trackst=c1+file1+c2+word1+c3+int1;
}




//Produce player 400pxX110px
//Produce Button inside page
/*Place button-inside 
<td width="30%" background="/images/redsplit.jpg" bgcolor="#993333" style="padding:5px;border-top:1px solid #111;">&nbsp;</td>
*/
var imgURL = chrome.extension.getURL("icon.png");
 
 
//body[bgcolor="#CCCCCC"]insert player $('td[width="750"]').append('<img '+'height=13px width=18px '+ 'src='+'"'+imgURL+'"'+'>');
//$('td[width="750"]').append('<div class="player">'+'player'+'<img '+'height=13px width=18px '+ 'src='+'"'+imgURL+'"'+'>'+'</div>');
$('<div class="player">'+'player'+'<img '+'height=13px width=18px '+ 'src='+'"'+imgURL+'"'+'>'+'</div>').insertAfter('td[width="24%"]');

//$('.player').append(c1+file1+c2+word1+c3+int1);

Up

//send message back to evenPage.js
chrome.runtime.sendMessage({method:'setTitle',title:fromDOM,});		