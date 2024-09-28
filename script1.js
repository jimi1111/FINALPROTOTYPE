document.getElementById('schedule-interview-button').addEventListener('click', function() {
    fetch('schedule-interview.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.main-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML file:', error));
});