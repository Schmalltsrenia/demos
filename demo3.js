var _toggle = "toleft";
var showItems = function() {
	var time = 0;
	$(".submit").removeAttr("style").addClass("stl");
	setTimeout(function() {
		$(".submit").css("padding-left", 0);
	}, 200);
	for(var i = 0; i < 9; i ++) {
		time = Math.random() * 500 >> 0;
		showSingleItem(i, time);
	}
};
var hideItems = function() {
	$(".submit").css("height", "12%").removeClass("stl").addClass("succeed");
	$(".submit span").removeClass("fa-share-alt").addClass("fa-check");
	setTimeout(function() {
		$(".submit").removeAttr("style");
	}, 240);
	$("#share ul li").removeAttr("style").removeClass("onclk").addClass("init");
}
function showSingleItem(n, time) {
	setTimeout(function() {
		$("#share ul li:nth-child(" + (n + 1) + ")").removeClass("init");
	}, time);
	setTimeout(function() {
		$("#share ul li:nth-child(" + (n + 1) + ")").css("transform", "scale(1)");
	}, time + 400);
}
$(".submit").bind("click", function() {
	if(_toggle === "toleft") {
		showItems();
		_toggle = "toright";
	} else if(_toggle === "toright") {
		hideItems();
		_toggle = "succeed";
	} else if(_toggle === "succeed") {
		$(".submit").css("height", "12%").removeClass("succeed");
		$(".submit span").removeClass("fa-check").addClass("fa-share-alt");
		_toggle = "toleft";
	}
});
$("#share ul li").bind("click", function(e) {
	var tmp =  e.currentTarget;
	console.log($(tmp).index());
	$(tmp).addClass("onclk");
});