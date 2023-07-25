document.getElementById("fetchDataBtn").addEventListener("click", function() {
    // Replace 'http://your-api-endpoint-url/api/persons/' with your actual API endpoint
    var apiEndpoint = 'http://127.0.0.1:8000/mai/';

    // Send an AJAX request to fetch the data from the API
    $.ajax({
        type: "GET",
        url: apiEndpoint,
        dataType: "json",
        success: function(responseData) {
            // Process the fetched data and display it on the web page
            displayData(responseData);
        },
        error: function(xhr, status, error) {
            console.error("Request failed. Status: " + xhr.status);
        }
    });
});

// Function to display the fetched data on the web page
function displayData(data) {
    var dataContainer = document.getElementById("dataContainer");
    dataContainer.innerHTML = "";

    // Process the data and create HTML elements to display it
    // Modify this part based on the structure of the API response
    // For example, if the API response is an array of objects:
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var itemElement = document.createElement("div");
        itemElement.textContent = "Name: " + item.name + ", Age: " + item.age;
        dataContainer.appendChild(itemElement);
    }
}

document.getElementById("fetchSpecificDataBtn").addEventListener("click", function() {
    // Get the input name from the HTML and remove leading/trailing spaces
    var inputName = document.getElementById("nameInput").value.trim();

    // Send an AJAX request to fetch the data for the specific name
    $.ajax({
        type: "GET",
        url: "/fetch_data/",
        dataType: "json",
        success: function(responseData) {
            // Filter the data by the input name (case insensitive)
            var specificNameData = responseData.filter(function(item) {
                return item.name.toLowerCase() === inputName.toLowerCase();
            });

            // Display the filtered data on the web page
            displayData(specificNameData);
        },
        error: function(xhr, status, error) {
            console.error("Request failed. Status: " + xhr.status);
        }
    });
});

// Function to display the fetched data on the web page



function my(){
    $("#dataContainer").toggle();
}