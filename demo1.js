$(".msg").bind("click", function(e) {
	e.preventDefault();
	$(".formdiv").animate({
		height: "92%"
	}, 500, function() {
		$(".c_text").addClass("c_textchange").hide();
	});
	$(".formdiv a").fadeOut();
	setTimeout(function() {
		$("span.fa.fa-comment-o").addClass("commentchange");
		$("span.fa.fa-times-circle-o").fadeIn("normal");
	}, 300);
});
$("span.fa.fa-times-circle-o").bind("click", function() {
	var that = $(this);
	$(".formdiv").animate({
		height: "21%"
	}, 500);
	$(".formdiv a").fadeIn();
	$(".c_text").fadeIn("normal").removeClass("c_textchange");
	setTimeout(function() {
		$("span.fa.fa-comment-o").removeClass("commentchange");
		that.fadeOut("normal");
	}, 300);
});