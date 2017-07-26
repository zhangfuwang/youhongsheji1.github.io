$(document).ready(function(){
	$(".quests").click(function(){
		$("#head").slideToggle();
	});

})

	function sscroll() {
	$("html, body").animate({
		"scroll-top": 0
	}, "fast");
}