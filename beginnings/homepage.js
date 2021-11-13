window.onload = (function() {

	side_bar = document.getElementById("right_side_bar")
	number_of_dots=13;
	style="left";
	padding="20px";
	for (var i = 0; i < number_of_dots; i++) {
		if (style == "left") {
			side_bar.innerHTML+="<div class='dot' style='".concat(style,":", padding, "'>.</div>");
			style="right";
		} else {
			side_bar.innerHTML+="<div class='dot' style='".concat(style,":", padding, "'>.</div>");
			style="left";

		}
	}
})