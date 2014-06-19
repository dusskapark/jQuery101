$(document).ready(function() {
	var v = false;
	$("button#vegOn").click(function(){
		if (v==false) {
			v = true;
		}
	});
	$("button#restoreMe").click(function(){
		if (v==true) {
			v = false;
		}
	});
	$("jungseob.good.hansome.apple").click(function() {
		console.log("멋진 사람을 알아보셨습니다! 외장하드 고마워요~ 비타500 놓고감!");
	});
});