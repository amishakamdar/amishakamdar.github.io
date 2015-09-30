(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});

	Parse.initialize("a0qjNP42IkOvuyWkiPwsqTsuzQ536VAtMF6iCTxS", "EUR0byLjNSH8YETpiK7JvfHLwlFE4Rc10dL9jGhr");

	var Registration = Parse.Object.extend("Registration");

	function saveRegisters(){
		var registration = new Registration();

		registration.set("name", $("#name").val());
		registration.set("email", $("#email").val());
		registration.set("message", $("#message").val());

		var callback = {
			success:function(){
				$('#response').html('Registered Successfully. Thanks for the support!').addClass('success').fadeIn('fast');
			},
			error: function(){
				$('#response').html('Oops! Something went wrong').addClass('error').fadeIn('fast');
			}
		};

		registration.save(null, callback);
	}

	$("#contact-form").on("submit", function(e) {
		e.preventDefault();
		saveRegisters();
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 300) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);
