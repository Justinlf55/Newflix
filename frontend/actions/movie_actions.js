import * as APIUtil from '../util/movie_api_util';

export const RECEIEVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIEVE_MOVIE = 'RECEIVE_MOVIE';

export const receiveMovies = movies => ({
    type: RECEIEVE_MOVIES,
    movies
});

export const receiveMovie = movie => ({
    type: RECEIEVE_MOVIE,
    movie
});

export const fetchMovies = filter =>  dispatch => (
    APIUtil.fetchMovies(filter).then(movies => dispatch(receiveMovies(movies)))
);

export const fetchMovie = id => dispatch => (
    APIUtil.fetchMovie(id).then(movie => dispatch(receiveMovie(movie)))
);

