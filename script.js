async function getData() {
    const response = await fetch('https://api.sampleapis.com/cartoons/cartoons2D');
    const data = await response.json();
    const appContainer = document.getElementById('app');

    data.forEach(cartoon => {
        const cartoonCard = document.createElement('div');
        cartoonCard.className = 'cartoon-card';

        const img = document.createElement('img');
        img.src = cartoon.image;
        img.alt = cartoon.title;

        const title = document.createElement('h2');
        title.textContent = cartoon.title;

        const details = document.createElement('p');
        details.innerHTML = `Year: ${cartoon.year}<br>
                            Creator: ${cartoon.creator.join(', ')}<br>
                            Rating: ${cartoon.rating}<br>
                            Genre: ${cartoon.genre.join(', ')}<br>
                            Runtime: ${cartoon.runtime_in_minutes} minutes<br>
                            Episodes: ${cartoon.episodes}`;

        cartoonCard.appendChild(img);
        cartoonCard.appendChild(title);
        cartoonCard.appendChild(details);

        appContainer.appendChild(cartoonCard);
    });
}

getData();
