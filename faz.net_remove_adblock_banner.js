// ==UserScript==
// @name        faz.net Remove AdBlock Banner
// @namespace   AdBlock Banner
// @include     http://www.faz.net/*
// @grant       none
// @version     1.0
// ==/UserScript==

//Parent Element
grandparent = document.getElementById('TOP'); 

var removeBanner = function() {
    var found = false;
	for (var i=0; i<grandparent.childNodes.length; i++) {
		if (grandparent.childNodes[i].id == "TOPNoAd" && !found) {
		    found = true;
		    grandparent.removeChild(grandparent.childNodes[i]);
		}
	}

    if (!found) {
        grandparent = document.getElementById('TOP');
        setTimeout(removeBanner, 100);
    }
}

//fires off the function to start with
removeBanner();