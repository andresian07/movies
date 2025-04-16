const apiKey = '0a3c6d4ba69c3a6f1ffd49965d949b11';

document.getElementById('search').addEventListener('click', searchMovies);

function searchMovies() {
    let nameMovie = document.getElementById('movie').value.toLowerCase();
    let url = 'https://api.themoviedb.org/3/search/movie';
    
    fetch(`${url}?api_key=${apiKey}&query=${nameMovie}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    let results = document.getElementById('results');
    results.innerHTML = '';

    if(movies.length === 0){
        results.innerHTML = '<p>No se encontraron peliculas</p>';
        return
    }

    movies.forEach(movie => {
        let div = document.createElement('div');
        div.classList.add('movie');
        div.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.overview}</p>
            <p>Rating: ${movie.vote_average}</p>
        `;
        results.appendChild(div);
    })
}