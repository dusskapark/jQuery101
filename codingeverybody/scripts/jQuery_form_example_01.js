$("input").focus( function () {
	$(this).next("span").html('focus');
	}).blur( function() {
		$(this).next("span").html('blur');
		}).change(function(e){
			alert('change!! '+$(e.target).val());
			}).select(function(){
				$(this).next('span').html('select');
});
