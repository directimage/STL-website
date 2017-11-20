function startSideSlider() {
	var images = $('.slide');
	var index = Math.floor(Math.random() * images.length) % images.length;
	var curr;
	var next;

	$('.side-bg.top').find('img').attr('src', $('#slideshow').find('img')[(index + 1) % images.length].src);
	$('.side-bg.bottom').find('img').attr('src', $('#slideshow').find('img')[index].src);
	
	setInterval(function() {
		curr = images[index];
		index = (index + 1) % images.length;
		next = images[index];
		
		$('.side-bg.top').find('img').attr("src", curr.src);
		$('.side-bg.bottom').find('img').attr("src", next.src);

		$('.side-bg.top').removeClass('hide');
		setTimeout(function() { 
			$('.side-bg.top').addClass('hide');
		}, 1);
	}, 2600);
}