
function hideNearMe() {
	var wh = window.innerHeight;
	mt = wh - 64 - 50; 
	$(".nearme-container").css({"margin-top" : mt});
	$(".nearme-container h5").attr("onclick","showNearMe()");
}

function showNearMe() {
	$(".nearme-container").css({"margin-top" : 0});
	$(".nearme-container h5").attr("onclick","hideNearMe()");
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