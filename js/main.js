function main(){
	$("#lenguaje-escogido").hide();
	$("#habilidades > div > ul.list-inline.list-icons > .list-inline-item")
	.hover(function(){
		$("#lenguaje-escogido").slideToggle(400);
	}, function(){
	$("#lenguaje-escogido").hide();
		
	});

}
$(document).ready(main);
