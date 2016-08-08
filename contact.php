<!DOCTYPE html>
<html>
<head>
<link href="style.css" rel="stylesheet" type="text/css">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MediaPreview &#8594; About</title>
</head>
<body>
	<?php include 'includes/header.php'; ?>
	<article class="about">
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
					<div class="col-4">
						<p>Mediapreview's Andy Wicks and his associates have been making videos and screen media products for commercial, public sector and community clients for the past 30 years.</p>
					</div> <!-- col-4 -->
					<div class="col-6">		
						<form action="email-form.php" method="POST">
						<p>Name</p> <input type="text" name="name">
						<p>Email</p> <input type="text" name="email">
						<p>Phone</p> <input type="text" name="phone">

						<p>Request Phone Call:</p>
						Yes:<input type="checkbox" value="Yes" name="call"><br />
						No:<input type="checkbox" value="No" name="call"><br />

						<p>Website</p> <input type="text" name="website">

						<p>Priority</p>
						<select name="priority" size="1">
						<option value="Low">Low</option>
						<option value="Normal">Normal</option>
						<option value="High">High</option>
						<option value="Emergency">Emergency</option>
						</select>
						<br />

						<p>Type</p>
						<select name="type" size="1">
						<option value="update">Website Update</option>
						<option value="change">Information Change</option>
						<option value="addition">Information Addition</option>
						<option value="new">New Products</option>
						</select>
						<br />

						<p>Message</p><textarea name="message" rows="6" cols="25"></textarea><br />
						<input type="submit" value="Send"><input type="reset" value="Clear">
						</form>
					</div> <!-- col-6 -->
				</div> <!-- row -->
			</div> <!-- grid-container -->
		</section> <!-- longform -->
		<section class="testimonials">
			<div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide">
	            	<div class="grid-container">
	            		<div class="col-8">
	            			<h2>"Mediapreview and Longley Farm have worked together for nearly twenty years now. They can put together all that is needed from idea to edit; from script to soundtrack. They are totally reliable and you can be sure of a good result."</h2>
	            			<h5>Jim Dickinson, Longley Farm</h5>
	            		</div>
	            	</div>
	            </div>
	            <div class="swiper-slide">
	            	<div class="grid-container">
	            		<div class="col-8">
	            			<h2>"Mediapreview are a highly professional company who marry first class technical skills to a ready understanding  of a brief, and a passion for getting behind a subject."</h2>
	            			<h5>Nancy Barrett, Creative Scene</h5>
	            		</div>
	            	</div>
	            </div>
	            <div class="swiper-slide">
	            	<div class="grid-container">
	            		<div class="col-8">
	            			<h2>Mediapreview keep leaving their chewing gum on the side of the table and it's really annoying.</h2>
	            			<h5>Tom Wicks, Miln</h5>
	            		</div>
	            	</div>
	            </div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination"></div>
	        <!-- Add Arrows -->
	        <div class="swiper-button-next"></div>
	        <div class="swiper-button-prev"></div>
	    </div>
		</section>
	</article> <!-- about -->
	<?php include 'includes/footer.php'; ?>
</body>

</html>