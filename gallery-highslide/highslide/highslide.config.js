/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = 'gallery-highslide/highslide/graphics/';
hs.showCredits = false;
hs.outlineType = '';
hs.dimmingOpacity = 1;
hs.transitionDuration = 500;
hs.align = 'center';
hs.allowMultipleInstances = false;
hs.enableKeyListener = false;
hs.captionOverlay.position = 'bottom center';
hs.restoreCursor = null;
hs.registerOverlay({
	html: '<div class="closebutton" onclick="return hs.close(this)" title="Close"></div>',
	position: 'top right',
	useOnHtml: true,
	fade: 2 // fading the semi-transparent overlay looks bad in IE
});

// Add the slideshow controller
hs.addSlideshow({
	slideshowGroup: 'group1',
	interval: 3000,
	repeat: true,
	useControls: true,
	fixedControls: 'fit',
	overlayOptions: {
		className: 'large-dark',
		opacity: .4,
		position: 'bottom center',
		offsetX: 0,
		offsetY: -10,
		hideOnMouseOut: false
	},
	thumbstrip: {
		mode: 'horizontal',
		position: 'below',
		relativeTo: 'image'
	}

});

// gallery config object
var config1 = {
	slideshowGroup: 'group1',
	transitions: ['expand', 'crossfade']
};

// Add Title Overlay
hs.registerOverlay({
	thumbnailId: null,
	overlayId: 'my-overlay',
	position: 'top center',
	hideOnMouseOut: false,
});
