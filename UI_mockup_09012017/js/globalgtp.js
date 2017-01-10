$(document).ready(function(){
	$('.mobuser').click(function(){
		$('.user-details').toggle();
		event.preventDefault();
	});

	$('.content-wrapper').on('click touchstart', function(){
		$('.user-details').hide();
	})
});
