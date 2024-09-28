document.getElementById('interviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const candidates = document.querySelectorAll('#candidates .form-group');
    const interviewers = document.querySelectorAll('#interviewers .form-group');

    let allFieldsFilled = true;

    candidates.forEach(candidate => {
        const name = candidate.querySelector('input[name="candidate"]').value;
        const email = candidate.querySelector('input[name="candidateEmail"]').value;
        const phone = candidate.querySelector('input[name="candidatePhone"]').value;
        if (!name || !email || !phone) {
            allFieldsFilled = false;
        }
    });

    interviewers.forEach(interviewer => {
        const name = interviewer.querySelector('input[name="interviewer"]').value;
        const email = interviewer.querySelector('input[name="interviewerEmail"]').value;
        const phone = interviewer.querySelector('input[name="interviewerPhone"]').value;
        if (!name || !email || !phone) {
            allFieldsFilled = false;
        }
    });

    if (allFieldsFilled) {
        window.location.href = 'anotherPage.html'; // Redirect to another page
    } else {
        alert('Please fill in all fields.');
    }
});

function addCandidate() {
    const candidateCount = document.querySelectorAll('#candidates .form-group').length + 1;
    const candidateDiv = document.createElement('div');
    candidateDiv.className = 'form-group';
    candidateDiv.innerHTML = `
        <div class="candidate-heading">Candidate ${candidateCount}</div>
        <input type="text" name="candidate" placeholder="Candidate Name" required>
        <input type="email" name="candidateEmail" placeholder="Candidate Email" required>
        <input type="tel" name="candidatePhone" placeholder="Candidate Phone Number" required>
    `;
    document.getElementById('candidates').appendChild(candidateDiv);
}

function addInterviewer() {
    const interviewerCount = document.querySelectorAll('#interviewers .form-group').length + 1;
    const interviewerDiv = document.createElement('div');
    interviewerDiv.className = 'form-group';
    interviewerDiv.innerHTML = `
        <div class="candidate-heading">Interviewer ${interviewerCount}</div>
        <input type="text" name="interviewer" placeholder="Interviewer Name" required>
        <input type="email" name="interviewerEmail" placeholder="Interviewer Email" required>
        <input type="tel" name="interviewerPhone" placeholder="Interviewer Phone Number" required>
    `;
    document.getElementById('interviewers').appendChild(interviewerDiv);
}
