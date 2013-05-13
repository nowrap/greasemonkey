// ==UserScript==
// @name        golem.de Remove AdBlock Banner
// @namespace   AdBlock Banner
// @include     http://www.golem.de/*
// @grant       none
// @version     1.0
// ==/UserScript==

//Parent Element
grandparent = document.getElementById('screen'); 

var removeBanner = function() {
    var found = false;
	for (var i=0; i<grandparent.childNodes.length; i++) {
		if (grandparent.childNodes[i].nodeName == "DIV" && !found) {
		    if (grandparent.childNodes[i].attributes.length === 1 && grandparent.childNodes[i].attributes["style"]) {
			    found = true;
			    grandparent.removeChild(grandparent.childNodes[i]);
			}
		}
	}

    if (!found) {
        grandparent = document.getElementById('header');
        setTimeout(removeBanner, 100);
    }
}

//fires off the function to start with
removeBanner();