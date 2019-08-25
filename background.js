


window.onload = function()
{
    
chrome.browserAction.setIcon({path:"icon16.png"});
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    

var url= tabs[0].url;

var origin = url.match(/^[\w-]+:\/{2,}\[?[\w\.:-]+\]?(?::[0-9]*)?/)[0];


var anst= document.getElementById("ans")
var yest= document.getElementById("yes")
		var ban ="https://www.banorte.com";
		var check = { active: true, currentWindow: true };
		if(origin == ban)
		{	
		yest.innerHTML='<img src="yes.png" style="width:50%">'
		 anst.innerHTML= "Sitio Seguro. <br> Usted se encuentra en un sitio perteneciente a Banorte";
		
		} 
		else
		{
		yest.innerHTML='<img src="no.png" style="width:50%">'
		anst.innerHTML= "Este sitio web no pertenece a Banorte. <br>Su informacion esta en riesgo.";
		
		
		}

});
	
}	;