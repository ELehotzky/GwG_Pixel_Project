// Select color input
console.log($("#colorPicker").val());

// Select size input
console.log($("#inputHeight").val());
console.log($("#inputWidth").val());

// Save & store grid size with Submit 
// When size is submitted by the user, call makeGrid()

var height;
var weight;
var color;

$("#sizePicker").submit(function(event) {
	event.preventDefault();
	height = $("#inputHeight").val();
	width = $("#inputWidth").val();
	makeGrid(height, width);
});

function makeGrid(height, width) {
	$("tr").remove();
	for (var i = 1; i <= height; i++) {
		$("#pixelCanvas").append("<tr id=row" + i + "></tr");
		for (var x = 1; x <= width; x++) {
			$("#row" + i).append("<td></td");
		}
	}
// Add/overwrite color to cells
$("td").click(function cellColor() {
	color = $("#colorPicker").val();
	if ($(this).attr("style")) {
		$(this).removeAttr("style")
	} else {
		$(this).attr("style", "background-color: " + color);
	}
});
}

