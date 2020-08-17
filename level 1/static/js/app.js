let tbody = d3.select('tbody');
var tableData = data;

// Build the Table
function buildTable(data) {
	tbody.html('');
	data.forEach((dataRow) => {
		let row = tbody.append('tr');
		Object.values(dataRow).forEach((val) => {
			let cell = row.append('td');
			cell.text(val);
		});
	});
}

function buttonClick() {
	d3.event.preventDefault();
	let date = d3.select('#datetime').property('value');
	let filterData = tableData;

	// Filter Data Using the Date entered;
	if (date) {
		filterData = filterData.filter((row) => row.datetime === date);
	}
	this.value = '';
	buildTable(filterData);
}

d3.selectAll('#filter-btn').on('click', buttonClick);
buildTable(tableData);
