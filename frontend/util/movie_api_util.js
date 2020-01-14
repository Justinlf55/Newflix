export const fetchMovies = movies => (
    $.ajax({
      method: 'GET',
      url: 'api/movies',
      movies
    })
  );

export const fetchMovie = id => (
  $.ajax({
      method: 'GET',
      url: `api/movies/${id}`
    })
  );