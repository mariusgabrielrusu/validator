$(".addPassenger").click(function(e) {
	var clone = $(".tpl").clone().appendTo("form");
	clone.removeClass("tpl");
	$(".button-holder").before(clone);
	e.preventDefault();
});
