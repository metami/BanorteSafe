window.onload = function()
{
    
chrome.browserAction.setIcon({path:"/images/icon16.png"});
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    

var url= tabs[0].url;

var origin = url.match(/^[\w-]+:\/{2,}\[?[\w\.:-]+\]?(?::[0-9]*)?/)[0];


var anst= document.getElementById("ans")
var yest= document.getElementById("yes")
		var ban ="https://www.banorte.com";
		var check = { active: true, currentWindow: true };
		if(origin == ban)
		{	
		chrome.runtime.sendMessage({
   		 action: 'updateIcon',
    		value: false
		});		
		chrome.browserAction.setIcon({path:"/images/icon16y.png"});
		yest.innerHTML='<img src="/images/yes.png" style="width:50%">'
		 anst.innerHTML= "<b>Sitio seguro.</b> <br> Usted se encuentra en un sitio perteneciente a Banorte.";
		} 
		else
		{
		yest.innerHTML='<img src="/images/no.png" style="width:50%">'
		anst.innerHTML= "<b>Este sitio web no pertenece a Banorte.</b> <br>Su informacion esta en riesgo.";
		}
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === "updateIcon") {
        if (msg.value) {
            chrome.browserAction.setIcon({path: "/images/icon16y.png"});
        } else {
            chrome.browserAction.setIcon({path: "/images/icon16.png"});
        }
    }
});
});
};