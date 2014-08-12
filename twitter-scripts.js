$(document).ready(function() {
	$('#tweet-input-small').focus(function() {
		$(this).height('80px');
		$('#invisible-compose-bits').show();
	}).blur(function(){
		$(this).height('28px');
		$('#invisible-compose-bits').hide();
	});

	// $(document).scroll(function () {
	// 	var newTweet = Mustache.render (($'#new-tweet').html(), tweet);
	// 	$(newTweet).appendTo($('#tweet-list')).html;
	// })
})