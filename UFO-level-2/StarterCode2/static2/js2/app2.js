// from data.js - homework assignment - first input data into the website
// YOUR CODE HERE!
var observations = data2;

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
// step 3 use forms, d3, and filters to create a functioning text submission.

var filterButton = d3.select("#filter-btn");
var filterForm = d3.select(".form-group")
//use .on to click and run the function that will ultimately filter your data

//filterButton.on("click", runFilter)


filterButton.on("click", runFilter)
filterButton.on("click", runFilter)
function runFilter() {
	d3.event.preventDefault();
	var delete_body = d3.selectAll("td").remove();
	var inputElement = d3.select("#datetime")
	var inputValue = inputElement.property("value");
	//we're console.loging out these values as a way of checking to see if our data is working.
	console.log(inputValue)
	console.log(observations)
	//now we'll filter our data using the arrow keys (otherwise we'd use function())) and equal it to the value typed within the search bar 
	filteredData = observations.filter(observation => observation.datetime === inputValueDate && observation.state === inputValueState)
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