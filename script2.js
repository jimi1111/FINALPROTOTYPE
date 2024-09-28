document.getElementById('adminForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const type = document.getElementById('type').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (type && date && time) {
        window.location.assign = 'addingcandidateandinterviewer.html'; // Redirect to another page
    } else {
        alert('Please fill in all fields.');
    }
});

