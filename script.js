document.getElementById('listButton').addEventListener('click', () => {
    fetch('input.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            lines = data.split('\n');
            const randomIndex = Math.floor(Math.random() * lines.length);
            const randomDish = lines[randomIndex];
            document.getElementById('fileContent').innerText = randomDish;
        })
        .catch(error => {
            console.error('There was a problem with the fetch', error);
        });
});
