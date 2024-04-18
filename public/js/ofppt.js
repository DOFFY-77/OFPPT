
    // document.addEventListener('DOMContentLoaded', () => {
    //     const a1 = document.getElementById('lien-1');
    //     const a2 = document.getElementById('lien-2');
    //     const a3 = document.getElementById('lien-3');
    //     const a4 = document.getElementById('lien-4');
    //     const a5 = document.getElementById('lien-5');

    //     const setActiveItem = (activeElement) => {
    //         const active = document.querySelector('.active');
    //         active?.classList.remove('active');
    //         activeElement.classList.add('active');
    //     };

    //     // Assuming you want to set up event listeners for these elements
    //     a1.addEventListener('click', () => setActiveItem(a1));
    //     a2.addEventListener('click', () => setActiveItem(a2));
    //     a3.addEventListener('click', () => setActiveItem(a3));
    //     a4.addEventListener('click', () => setActiveItem(a4));
    //     a5.addEventListener('click', () => setActiveItem(a5));
    // });
    // Load the template view
// $.get('{{ route("template") }}', function(data) {
//     $('.content').html(data); // Update the '.content' div with the received data
    
//     // Load the dashboard partial into the .content div
//     $.get('{{ route("dashboard") }}', function(dashboardData) {
//         $('.content').html(dashboardData); // Update the '.content' div with the received dashboard data
//     });
// });


//     $('a').click(function(event) {
//         event.preventDefault(); // Prevent the default action (i.e., page refresh)
    
//         $.get($(this).attr('href'), function(data) {
//             $('.content').html(data); // Update the '.content' div with the received data
//         });
//     });
    
// Load the template view
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

    
    
    
