$(function(){
	$(".showPopup").each(function() {
		$(this).click(function(e) {
			$(".popup-bg").toggle();
			$('body').toggleClass('overflow-hide');
			$(this).find('.popup').toggle();
			$(this).find('.player').attr('showing','true');
		});
	});
    $(".popup-bg").click(function(){
		$('body').toggleClass('overflow-hide');
        $(".popup-bg").toggle();
        $(".popup").hide();
		$(".player").each(function() {
			if($(this).attr("showing") == 'true'){
				var videoSrc = $(this).attr("src");
				$(this).attr("src","");
				// $(this).attr("src",videoSrc);
				$(this).attr("showing","false");
			}
		})
    });
});

function clickAddSrc(element, videoSource) {
	$(element).find('iframe').attr('src', videoSource);
}