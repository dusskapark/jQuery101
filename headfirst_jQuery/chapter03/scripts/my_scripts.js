$(document).ready(function() {
	$(".guess_box").click(checkForCode); 
	function checkForCode () {
		var my_num = Math.floor((Math.random()*5)+5);
		var discount = "<p>your discount is "+my_num+"% </p>";
		$(this).append(discount);
		$(".guess_box").each( function(){
			$(this).unbind("click");
		});
		
	};
});