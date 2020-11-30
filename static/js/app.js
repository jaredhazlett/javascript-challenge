// from data.js - homework assignment - first input data into the website
// YOUR CODE HERE!
// we start by defining our data as a variable. and defining the "tbody" as a variable using d3 to select it within the html. We want to add and subtract rows from 
//tbody
var observations = data;

var tbody = d3.select("tbody")

// step 1 loop through the data and console.log each weather report object to make sure the code is working
observations.forEach(function(ufoReport) {
	console.log(ufoReport)
	// step 2 we need to create new rows to input our table data. Use d3 to append one table row 'tr' for each ufo object.
	//revising the above code, for each observation, we're appending a row.
	var row = tbody.append("tr");
	//we need another for each function, but we need to use Object.entries from each observation(ufoReport) to forEach through and append the table data.
	Object.entries(ufoReport).forEach(function([key, value]) {
		console.log(key, value);
		//here we append table data with each cell.text(value)
		var cell = row.append("td");
		cell.text(value);
	});
});

//I've included a reset button to reset the filter. It's very similar to the above code but incorporates d3 to remove the previously added rows and table data
//to make way for the old data information
//first create a new variable to select the id for the reset button
var resetButton = d3.select("#reset-btn")
//when clicking the reset button, run the funciton 'reset'
resetButton.on("click", reset)
//create the function reset
function reset() {
	//prevent refreshing the page
	d3.event.preventDefault();
	//delete any and all table rows and table data to make way for a new table.
	var delete_body_reset_rows = d3.selectAll("tr").remove();
	var delete_body_reset = d3.selectAll("td").remove();
	//cycle through the code we used to start the page above - 
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

//finally we'll add our filter button
var filterButtonDate = d3.select("#filter-btn");
//when we click the filter button, we'll run our filter
filterButtonDate.on("click", runFilter)
//create our filter function
function runFilter() {
	//prevent refreshing the page and delete any table rows or table data to make way for a filtered table
	d3.event.preventDefault();
	var delete_body_data = d3.selectAll("td").remove();
	var delete_body_rows = d3.selectAll("tr").remove();
	//select the element within the html that will hold the value we want to filter with
	var inputElement = d3.select("#datetime")
	//select the property of the value within the element using .property("value");
	var inputValue = inputElement.property("value");
	//we're console.loging out these values as a way of checking to see if our code is working.
	console.log(inputValue)
	console.log(observations)
	//now we'll filter our observations based on the single observation => based on the observation.datetime as a boolean T/F vs what was written in the input value
	var filteredData = observations.filter(observation => observation.datetime === inputValue)
	
	//print out the filtered data so we know it's working
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

