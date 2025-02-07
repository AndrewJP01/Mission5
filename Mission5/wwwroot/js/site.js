// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Calculator logic
function initializeCalculator() {
    const hourlyRate = 50; // Fixed hourly rate

    // Calculate button click event
    $('#calculate').click(function () {
        const hours = $('#hours').val(); // Get the number of hours

        // Validate input
        if (hours === '' || isNaN(hours) || hours < 1) {
            $('#error').text('Please enter a valid number of hours (minimum 1).');
            $('#total').text('$0.00');
        } else {
            $('#error').text(''); // Clear error message
            const total = hours * hourlyRate; // Calculate total cost
            $('#total').text('$' + total.toFixed(2)); // Display total cost
        }
    });
}

// Run the calculator logic when the document is ready
$(document).ready(function () {
    initializeCalculator();
});
