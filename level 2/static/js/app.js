let tbody = d3.select('tbody');
var tableData = data;

// Build the Table
function buildTable(data) {
	tbody.html('');
	data.map((dataRow) => {
		let row = tbody.append('tr');
		Object.values(dataRow).map((val) => {
			let cell = row.append('td');
			cell.text(val);
		});
	});
}

function buttonClick() {
	d3.event.preventDefault();
	// Select HTML Input Element & Get the Value Property of that Input Element
	let date = d3.select('#datetime').property('value');
	let city = d3.select('#city').property('value');
	let state = d3.select('#state').property('value');
	let country = d3.select('#country').property('value');
	let shape = d3.select('#shape').property('value');

	let filterData = tableData;

	// Filter the data based on the entries
	if (date) {
		filterData = filterData.filter((row) => row.datetime === date);
	}
	if (city) {
		filterData = filterData.filter((row) => row.city === city);
	}
	if (state) {
		filterData = filterData.filter((row) => row.state === state);
	}
	if (country) {
		filterData = filterData.filter((row) => row.country === country);
	}
	if (shape) {
		filterData = filterData.filter((row) => row.shape === shape);
	}
	// Build Table with Filtered Data
	buildTable(filterData);
	'#filters'.children('input').val('');
}

d3.selectAll('#filter-btn').on('click', buttonClick);
buildTable(tableData);
