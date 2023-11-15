function submitChecklist() {
    const checklist = {
        check1: document.getElementById('check1').checked,
        check2: document.getElementById('check2').checked,
        check3: document.getElementById('check3').checked
    };

    fetch('http://localhost:3000/submit-checklist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(checklist),
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch((error) => {
        console.error('Error:', error);
    });
}
