// ==UserScript==
// @name        spiegel.de Remove AdBlock Banner
// @namespace   AdBlock Banner
// @include     http://www.spiegel.de/*
// @grant       none
// @version     1.0
// ==/UserScript==

//Parent Element
grandparent = document.getElementById('spWrapper'); 

var removeBanner = function() {
    var found = false;
	for (var i=0; i<grandparent.childNodes.length; i++) {
		if (grandparent.childNodes[i].nodeName == "DIV" && !found) {
		    if (grandparent.childNodes[i].attributes.length === 2 && grandparent.childNodes[i].attributes["style"]) {
			    found = true;
			    grandparent.removeChild(grandparent.childNodes[i]);
			}
		}
	}

    if (!found) {
        grandparent = document.getElementById('spWrapper');
        setTimeout(removeBanner, 100);
    }
}

//fires off the function to start with
removeBanner();