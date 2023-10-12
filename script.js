    document.addEventListener('DOMContentLoaded', () => {
  const cartoonsListElement = document.getElementById('cartoons-list');
  const cartoonsData = [
      {
          "title": "Reboot",
          "year": 1994,
          "creator": [
              "Gavin Blair",
              "John Grace",
              "Philip Mitchell"
          ],
          "rating": "TV-Y7",
          "genre": [
              "Adventure",
              "Action"
          ],
          "runtime_in_minutes": 30,
          "episodes": 47,
          "image": "https://m.media-amazon.com/images/M/MV5BMTg1NzQ3NTI0MF5BMl5BanBnXkFtZTcwMzcwOTUyMQ@@._V1_.jpg",
          "id": 1
      },
      {
          "title": "Beast Wars",
          "year": 1996,
          "creator": [
              "Steve Sacks",
              "Colin Davies",
              "John Pozer"
          ],
          "rating": "TV-Y7",
          "genre": [
              "Sci-Fi",
              "Action"
          ],
          "runtime_in_minutes": 30,
          "episodes": 52,
          "image": "https://m.media-amazon.com/images/M/MV5BNDUxODg4MzE5NV5BMl5BanBnXkFtZTYwNDA0OTc4._V1_.jpg",
          "id": 2
      }
  ];

  cartoonsData.forEach(cartoon => {
      const cartoonCard = document.createElement('div');
      cartoonCard.className = 'cartoon-card';

      const imageElement = document.createElement('img');
      imageElement.src = cartoon.image;
      imageElement.alt = cartoon.title;

      const titleElement = document.createElement('h2');
      titleElement.textContent = cartoon.title;

      const creatorsElement = document.createElement('p');
      creatorsElement.textContent = 'Creators: ' + cartoon.creator.join(', ');

      const genreElement = document.createElement('p');
      genreElement.textContent = 'Genre: ' + cartoon.genre.join(', ');

      const yearElement = document.createElement('p');
      yearElement.textContent = 'Year: ' + cartoon.year;

      const episodesElement = document.createElement('p');
      episodesElement.textContent = 'Episodes: ' + cartoon.episodes;

      cartoonCard.appendChild(imageElement);
      cartoonCard.appendChild(titleElement);
      cartoonCard.appendChild(creatorsElement);
      cartoonCard.appendChild(genreElement);
      cartoonCard.appendChild(yearElement);
      cartoonCard.appendChild(episodesElement);

      cartoonsListElement.appendChild(cartoonCard);
  });
});
 