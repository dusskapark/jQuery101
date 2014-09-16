/**
 * 
 */
var $wrapper = $('#root').addClass('selected');
$('#code').keydown(function(e) {
	if (e.keyCode == 13) {
		eval($(this).val());
		return false;
	}
}).change(function() {
	eval($(this).val());
});
$('tr').click(function() {
	$(this).find('.title').toggleClass('checked');
});
