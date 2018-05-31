// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredrows to addressData initially
var filteredrows = dataSet;

// renderTable renders the filteredrows to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredrows.length; i++) {
    // Get get the current address object and its fields
    var rows = filteredrows[i];
    var fields = Object.keys(rows);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the rows object, create a new cell at set its inner text to be the current value at the current row's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = rows[field];
    }
  }
}

function handleSearchButtonClick() {
  var filterdata = $dateInput.value.trim().toLowerCase();

  // Set filteredrows to an array of all rows whose "datetime" matches the filter
  filteredrows = dataSet.filter(function(rows) {
    var datetimeRows = rows.datetime;
    var cityRows = rows.city.toLowerCase();
    var stateRows = rows.state.toLowerCase();
    var countryRows = rows.country.toLowerCase();
    var shapeRows = rows.shape.toLowerCase();

    // If true, add the datetimeRows to the filteredrows, otherwise don't add it to filtererows
    return (datetimeRows === filterdata || cityRows === filterdata || stateRows === filterdata || countryRows === filterdata || shapeRows === filterdata);
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
