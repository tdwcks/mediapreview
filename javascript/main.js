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
    $(".video-overlay").mouseover(function(){
    	$(this).next('.image').find('.depot-video').vimeo("play");
    }).mouseout(function(){
    	$(this).next('.image').find('.depot-video').vimeo("pause");
    });
});

// Distress Kit Lightbox

$( ".js-distress-preview" ).on( "click", function() {
	$("body").css("overflow", "hidden");
	$('.lightbox').addClass('active');
});

$( ".js-8mm-link" ).on( "click", function() {
	var distress = $( this ).attr( "title" );
	$('.distress-switcher').removeClass('active');
	$('.' + distress).addClass('active');
});



// 8mm Depot Preview Clip

$( ".js-movie-picker-item" ).on( "click", function() {
	
	// Get vimeo url, caption and video length from target
	var videoUrl = $(this).find('iframe').attr("src").replace('autoplay=0', 'autoplay=1').replace('&background=1', '&background=0');
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

// Get rid of lightbox on Depot

$( ".depot .lightbox-bg" ).on( "click", function() {
	$('.lightbox').removeClass('active');
	$("body").css("overflow", "visible");
	$('.lightbox-video').attr("src", "");
});

// Get rid of lightbox on 8mm

$( ".distress .lightbox-bg" ).on( "click", function() {
	$('.lightbox').removeClass('active');
	$('.distress-switcher').removeClass('active');
	$('.distress-options').addClass('active');
	$("body").css("overflow", "visible");
});
// Contact Form 
 


	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});
