
function hideNearMe() {
	var wh = window.innerHeight;
	mt = wh - 60; 
	$(".nearme-container").css({"top" : mt});
	$(".nearme-container #near-me").attr("onclick","showNearMe()");
	$(".nearme-container #near-me img").attr("src","asset/img/arrow-up.png");
}

function showNearMe() {
	$(".nearme-container").css({"top" : 64});
	$(".nearme-container #near-me").attr("onclick","hideNearMe()");
	$(".nearme-container #near-me img").attr("src","asset/img/arrow-down.png");
}

window.onload=function()
{
    hideNearMe();
    $(".nearme-container").css({"opacity" : 1});
}

window.onresize=function()
{
    hideNearMe();
}