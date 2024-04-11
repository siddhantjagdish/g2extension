document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('query-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const url = document.getElementById('url-input').value;
        fetch('BACKEND_URL_INSERT_HERE', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: url })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('response-container').innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
