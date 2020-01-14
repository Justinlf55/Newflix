import * as GenreAPIUtil from '../util/genre_api_util';

export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const RECEIVE_GENRE = 'RECEIVE_GENRE';

export const receiveGenres = genres => ({
    type: RECEIVE_GENRES,
    genres
});

export const receiveGenre = genre => ({
    type: RECEIVE_GENRE,
    genre
});

export const fetchGenres = filter =>  dispatch => (
    GenreAPIUtil.fetchGenres(filter).then(genres => dispatch(receiveGenres(genres)))
);

export const fetchGenre = id => dispatch => (
    GenreAPIUtil.fetchGenre(id).then(genre => dispatch(receiveGenre(genre)))
);