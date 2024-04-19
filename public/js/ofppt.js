

$.get('/template', function() {
    // $('.content').html(); // Update the '.content' div with the received template data
    
    // Load the dashboard partial into the .content div
    $.get('{{ route("dashboard") }}', function(dashboardData) {
        $('.content').html(dashboardData); // Append the dashboard data to the existing content
    });
});

// Handle clicks on links
$('a').click(function(event) {
    event.preventDefault(); // Prevent the default action (i.e., page refresh)

    // Load the content of the clicked link into the .content div
    $.get($(this).attr('href'), function(data) {
        $('.content').html(data); // Update the '.content' div with the received data
    });
});

// $(document).ready(function() {
//     // Load the dashboard partial into the .content div
//     $.get('/dashboard', function(dashboardData) {
//         $('.content').html(dashboardData); // Append the dashboard data to the existing content
//     });
// });

// // Handle clicks on links
// $('a').click(function(event) {
//     event.preventDefault(); // Prevent the default action (i.e., page refresh)

//     // Load the content of the clicked link into the .content div
//     $.get($(this).attr('href'), function(data) {
//         $('.content').html(data); // Update the '.content' div with the received data
//     });
// });

    
    
    
