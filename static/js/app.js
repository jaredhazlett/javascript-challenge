// from data.js - homework assignment - first input data into the website
// YOUR CODE HERE!
var observations = data;

var tbody = d3.select("tbody")

console.log(observations);

// step 1 loop through the data and console.log each weather report object

// step 2 use d3 to append one table row 'tr' for each ufo object. We'll add text in a few
observations.forEach(function(ufoReport) {
	console.log(ufoReport)
	var row = tbody.append("tr");
	Object.entries(ufoReport).forEach(function([key, value]) {
		console.log(key, value);
		var cell = row.append("td");
		cell.text(value);
	});
});

var resetButton = d3.select("#all-data-btn")
resetButton.on("click", reset)
function reset() {
	d3.event.preventDefault();
	var delete_body_reset_rows = d3.selectAll("td").remove();
	var delete_body_reset = d3.selectAll("td").remove();
	observations.forEach(function(ufoReport) {
		console.log(ufoReport)
		var row = tbody.append("tr");
		Object.entries(ufoReport).forEach(function([key, value]) {
			console.log(key, value);
			var cell = row.append("td");
			cell.text(value);
		});
	});
};
// step 3 use forms, d3, and filters to create a functioning text submission.

var filterButtonDate = d3.select("#filter-btn");

//use .on to click and run the function that will ultimately filter your data

//filterButton.on("click", runFilter)

filterButtonDate.on("submit", runFilter)
filterButtonDate.on("click", runFilter)
function runFilter() {
	d3.event.preventDefault();
	var delete_body_data = d3.selectAll("td").remove();
	var delete_body_rows = d3.selectAll("tr").remove();
	var inputElement = d3.select("#datetime")
	var inputValue = inputElement.property("value");
	//we're console.loging out these values as a way of checking to see if our data is working.
	console.log(inputValue)
	console.log(observations)
	//now we'll filter our data using the arrow keys (otherwise we'd use function())) and equal it to the value typed within the search bar
	var filteredData = observations.filter(observation => observation.datetime === inputValue)
	
	//print out the filtered data so we know we've done
	console.log(filteredData)
	//here we want to reset and re-run the table function but only with the filtered data
	filteredData.forEach(function(ufoReport) {
		console.log(ufoReport)
		var row = tbody.append("tr");
		Object.entries(ufoReport).forEach(function([key, value]) {
			console.log(key, value);
			var cell = row.append("td");
			cell.text(value);
	});
});
};

