$('#sizePicker').submit(function(e){
	e.preventDefault();
	makeGrid();
});

function makeGrid(){
	// Select size input
	let height = $('#input_height').val();
	let width = $('#input_width').val();

	let table = $('#pixel_canvas');
	table.empty();

	//create  rows 
	for(let i = 0; i < height; i++){
		let tableRow = $('<tr></tr>');
		table.append(tableRow);

		//create cells
		for(let j = 0; j < width; j++){
			let cell = $('<td></td>');
			tableRow.append(cell);
		}

	}

}