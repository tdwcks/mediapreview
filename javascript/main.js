// =================================================================
// 	Mediapreview
// 	Global Javascript
// =================================================================


// Lazy Load The Image 
$("img.lazy").lazyload({
	threshold : 200,
	effect : "fadeIn"
});

// Hamburger Menu Trigger 
$( ".menu-trigger" ).on( "click", function() {
 	$('nav').toggleClass('active');
});

// Vimeo player
$(document).ready(function(){   
	$(".depot-video").vimeo("play").vimeo("pause");
    $(".depot-video").mouseover(function(){
    	$(this).vimeo("play");
    }).mouseout(function(){
    	$(this).vimeo("pause");
    });
});

$( ".js-movie-picker-item" ).on( "click", function() {
	
	// Get vimeo url, caption and video length from target
	var videoUrl = $(this).find('iframe').attr("src").replace('autoplay=0', 'autoplay=1');
		caption = $( this ).find('h4').html();
		time = $( this ).find('h5').html();

	// Put the vimeo url, caption and video length into the lightbox
	$('.lightbox-video').attr("src", videoUrl);
	$('.lightbox-caption').text(caption);
	$('.lightbox-time').text(time);
	
	// Show the lightbox
	$("body").css("overflow", "hidden");
	$('.lightbox').addClass('active');

	// Prevent the link from being a normal link
 	return false;
});

$( ".lightbox-bg" ).on( "click", function() {
	$('.lightbox').removeClass('active');
	$("body").css("overflow", "visible");
	$('.lightbox-video').attr("src", "");
});
	

