$(document).ready(function() {
	$(".guess_box").hover(function() { 
		//mouse enter 이벤트 핸들러 입니다. 
		$(this).addClass("my_hover");
	},
	function() { 
		//mouse reave 이벤트 핸들러 입니다. 
		$(this).removeClass("my_hover");
	});
	
	$(".guess_box").click( checkForCode ); 
	function getRandom(num) {
		var my_num = Math.floor(Math.random()*num);
		return my_num;
	}
		var hideCode = function () {
			var numRoad = getRandom(4);
			$(".guess_box").each(function(index, value) {
				if (numRoad == index) {
					$(this).append("<span id='has_discount'>&nbsp;</span>");
				return false;
			}
		});
	};
		hideCode();
		function checkForCode () {
			var discount;
			if($.contains(this, document.getElementById("has_discount") ) ) 
			{
				var my_num = getRandom(100);
				//p158에 따라서 내용 수
				discount = "<p>Your Code: Code"+my_num+"% </p>"; 
			 } else {
				 discount = "<p>Sorry, no discount this time!</p>";
			 }
		 $(".guess_box").each( function() {
			 if($.contains(this, document.getElementById("has_discount")) ) {
				 $(this).addClass("discount");
			 }else {
				 $(this).addClass("no_discount");
			 }
			 $(this).unbind();
			});
		 $("#result").append(discount);
	}
});


