export const selectMovie = ({ movies }, movieId) => {
    return movies[movieId];
};

export const selectGenre = ({ genres }, genreId) => {
  return genres[genreId];
}