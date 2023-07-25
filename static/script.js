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
