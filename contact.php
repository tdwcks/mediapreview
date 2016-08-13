<!DOCTYPE html>
<html>
<head>
<link href="style.css" rel="stylesheet" type="text/css">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MediaPreview &#8594; About</title>
</head>
<body>
	<?php include 'includes/header.php'; ?>
	<article class="contact">
		<section class="hero">
			<img class="lazy" data-original="images/bg-1.jpg">
			<div class="grid-container">
				<div class="row">
					<div class="col-6">
						<h2>Contact us for video programmes and products for commercial, public sector.</h2>
					</div> <!-- col-6 -->
				</div> <!-- row -->
			</div> <!-- grid-container -->
		</section> <!-- hero -->
		<section class="longform">
			<div class="grid-container">
				<div class="row">
					<div class="col-3">
						<h4>Work With Us</h4>
						<p>Have a project in mind? Use the contact form or get in touch:</p>
						<a href="mailto:andy@mediapreview.net" target="_top">andy@mediapreview.net</a>
						<a href="tel:+44 (0)7901 915651" target="_top">+44 (0)7901 915651</a>
					</div> <!-- col-3 -->
					<div class="col-3">
						<h4>Stock Footage Enquiries</h4>
						<p>Want more information about our 8mm products? Email us here</p>
						<a href="mailto:admin@mediapreview.net" target="_top">admin@mediapreview.net</a>
					</div> <!-- col-3 -->
					<div class="col-6">
						<h4>Contact Form</h4>		
						<form id="ajax-contact" method="post" action="mailer.php">
						    <div class="field form-half">
						        <label for="name">Name:</label>
						        <input type="text" id="name" name="name" required>
						    </div>

						    <div class="field form-half">
						        <label for="email">Email:</label>
						        <input type="email" id="email" name="email" required>
						    </div>

						    <div class="field">
						        <label for="message">Message:</label>
						        <textarea rows="8" id="message" name="message" required></textarea>
						    </div>

						    <div id="form-messages"></div>

						    <div class="field">
						        <button type="submit">Send</button>
						    </div>
						</form>
					</div> <!-- col-6 -->
				</div> <!-- row -->
			</div> <!-- grid-container -->
		</section> <!-- longform -->
	</article> <!-- about -->
	<?php include 'includes/footer.php'; ?>
</body>

</html>