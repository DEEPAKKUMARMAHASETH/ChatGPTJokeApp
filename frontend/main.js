function getJoke() {
    const keyword = document.getElementById('keyword').value;
    if (!keyword) {
        alert('Please enter a keyword.');
        return;
    }

    const apiKey = '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';
    const apiUrl = `http://localhost:8080/bot/chat?prompt=Joke on ${keyword}`;
    showLoadingSpinner();
    fetch(apiUrl, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
        .then(response => response.text())
        .then(data => {
            hideLoadingSpinner();
            const jokeElement = document.getElementById('joke');
            jokeElement.innerHTML = `<strong>Have Fun:</strong><br>${data}`;
        })
        .catch(error => {
            hideLoadingSpinner();
            console.error('Error fetching joke:', error);
        });
}
function showLoadingSpinner() {
    const jokeElement = document.getElementById('joke');
    jokeElement.innerHTML = '<div class="spinner-border" role="status"></div>';
}

function hideLoadingSpinner() {
    const jokeElement = document.getElementById('joke');
    jokeElement.innerHTML = '';
}