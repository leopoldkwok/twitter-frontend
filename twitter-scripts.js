$(document).ready(function() {
	$('#test').on('click', function(event) {
		event.preventDefault();
		$('#tweet-container li:gt(4)').fadeOut(function() {
			this.remove();
		})
	});
})