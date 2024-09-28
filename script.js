document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

    if (username && password) {
        window.location.href = 'admindashboard.html'; // Redirect to another page
    } else {
        alert('Please fill in both fields.');
    }
});

