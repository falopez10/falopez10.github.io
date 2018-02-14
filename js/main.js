function main(){
	$(".skill-list").hide();
	$(".skill-type").on("click", function() {
		$(this).next().slideToggle(400);
		// $(this).next().slideToggle(400);
		// $(this).toggleClass('active');
	}

	);
}
$(document).ready(main);