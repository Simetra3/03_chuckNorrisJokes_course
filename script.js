const url = 'https://api.chucknorris.io/jokes/random';

const button = document.getElementById('get-joke');
const p = document.getElementById('joke');

button.addEventListener('click', function() {
    getJoke();
});

function getJoke() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        p.textContent = data.value;
    })
}


