$('#sizePicker').submit(function(e){
	e.preventDefault();
	makeGrid();
});



function makeGrid(){
	//get table element, remove existing rows & cells
	let table = $('#pixel_canvas');
	table.empty();

	// get size input from form
	let height = $('#input_height').val();
	let width = $('#input_width').val();

	//create rows 
	for(let i = 0; i < height; i++){
		let tableRow = $('<tr></tr>');
		table.append(tableRow);

		//create cells for each row
		for(let j = 0; j < width; j++){
			let cell = $('<td></td>');

			//add event listener to each cell
			cell.click(function(){
				//change background
				$(this).attr('bgcolor', $('#colorPicker').val())
			});

			//add cell to table row
			tableRow.append(cell);
		}

	}
}