/** 
@(document).ready(fucntion() {
	$("guess_box").click(fucntion(){
		alert("you click me");
	});
});
 * 
 */

@(document).ready(fuction() {
	$("guess_box").click(fuction() {
		$("guessbox").remove();
		var = discount=Math.floor((Math.radom()*5)+5);
		var = discount_msg="<p>your discount is "+ discount +%</p>;
		alert(discount_msg);
		$(this).append(discount_msg);
	});
}
		
);