import {
    RECEIVE_GENRES,
    RECEIVE_GENRE,
  } from '../actions/genre_actions';
  
  const genresReducer = (state = {}, action) => {
    Object.freeze(state)

    switch(action.type) {
      case RECEIVE_GENRES:
        return action.genres;
      case RECEIVE_GENRE:
        const newGenre = { [action.genre.id]: action.genre };
        return Object.assign({}, state, newGenre);
      default:
        return state;
    }
  };
  
  export default genresReducer;