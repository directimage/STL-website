/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = 'highslide/graphics/';
hs.showCredits = false;
hs.outlineType = 'custom';
hs.dimmingOpacity = 0.8;
hs.dimmingDuration = 50;
hs.fadeInOut = true;
hs.expandDuration = 300;
hs.restoreDuration = 300;
hs.align = 'center';
hs.allowMultipleInstances = true;
hs.dragByHeading = false;
hs.registerOverlay({
	html: '<div class="closebutton" onclick="return hs.close(this)" title="Close"></div>',
	position: 'top right',
	useOnHtml: true,
	fade: 2 // fading the semi-transparent overlay looks bad in IE
});

