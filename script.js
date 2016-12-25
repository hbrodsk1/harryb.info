

$( document ).ready(function() {
	$('.project-title').hide();
	$('.project').mouseenter(function() {
	$('.project-title').show();
	$(this).css("background-color", "black")
	});


	$('.project').mouseleave(function() {
	$('.project-title').hide();
	$(this).css("background-color", "#ede3d6")
	});
});