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
