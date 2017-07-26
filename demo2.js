var flag = true;
var slDown = function() {
	$("#home ul").animate({
		height: "58%",
		paddingTop: "50px"
	}, 1000);
	$(".bg").addClass("bgChange");
	$("#home ul").addClass("shadow");
	$(".bar").addClass("barDown");
};
var slUp = function() {
	$("#home ul").animate({
		height: "0",
		paddingTop: "0px"
	}, 1000);
	$(".bg").removeClass("bgChange");
	$("#home ul").removeClass("shadow");
	$(".bar").addClass("barUp");
	$("#btn").addClass("btnUp");
	flag = false;
	setTimeout(function() {
		$(".bar").removeClass("barDown");
		$("#btn").removeClass("btnUp");
		$(".bar").removeClass("barUp");
		flag = true;
	}, 1000);
};
var toggle = true;
$("#btn").bind("click", function() {
	if(flag) {
		if(toggle) {
			slDown();
			toggle = false;
		} else {
			slUp();
			toggle = true;
		}
	}
});