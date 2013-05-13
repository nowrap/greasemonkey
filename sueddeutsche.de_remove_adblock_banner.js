// ==UserScript==
// @name        sueddeutsche.de Remove AdBlock Banner
// @namespace   AdBlock Banner
// @include     http://www.sz.de/*
// @include     http://www.sueddeutsche.de/*
// @grant       none
// @version     1.0
// ==/UserScript==

//Parent Element
grandparent = document.getElementsByTagName("body")[0]; 

var removeBanner = function() {
    var found = false;
	for (var i=0; i<grandparent.childNodes.length; i++) {
		if (grandparent.childNodes[i].nodeName == "DIV" && !found) {
		    if (grandparent.childNodes[i].attributes.length === 0) {
			    found = true;
			    grandparent.removeChild(grandparent.childNodes[i]);
			}
		}
	}
}

//fires off the function to start with
removeBanner();