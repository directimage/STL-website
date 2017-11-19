// changes the class of the div with id equal to targetID 
// from current class to activeClass
function setActive(targetID, activeClass){
	document.getElementById(targetID).className = activeClass;
}

// changes the class of the div with id equal to targetID 
// from current class to activeGalleryClass
var lastActive = "";
function setActiveGallery(targetID){
	if(lastActive != ""){
		var currentMenuLink = document.getElementById(lastActive);
		currentMenuLink.className = "not-active";
		currentMenuLink.getElementsByTagName('img')[0].src="images/gallery-bullet-off.png";
	}
	var nextMenuLink = document.getElementById(targetID); 
	nextMenuLink.className = 'gallery-active';
	nextMenuLink.getElementsByTagName('img')[0].src="images/gallery-bullet-on.png";
	lastActive = targetID;
}

//  setActiveGallery('commercial', 'gallery-active'){
// 	var nextMenuLink = document.getElementById('commercial'); 
// 	nextMenuLink.className = 'gallery-active';
// 	nextMenuLink.getElementsByTagName('img')[0].src="images/gallery-bullet-on.png";
//  }
'gallery-active'