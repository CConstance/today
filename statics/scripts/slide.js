var _index2=0;
$(".cloth .scrollRight img").click(function(){
	console.log("click right!");
	_index2++;
	var len=$(".scroll ul.mobile li").length;
	if(_index2+2>len){
		$(".cloth .scroll ul.mobile").stop().append($("ul.mobile").html());
	}
	$(".cloth .scroll .scroll ul.mobile").stop().animate({left:-_index2*326},1000);
	});

	
$(".cloth .scrollLeft img").click(function(){
	if(_index2==0){
		$("ul.mobile").prepend($("ul.mobile").html());
		$("ul.mobile").css("left","-1380px");
		_index2=3
	}
	_index2--;
	$(".cloth .scroll ul.mobile").stop().animate({left:-_index2*326},1000);
	});	