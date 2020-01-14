import { combineReducers } from 'redux';

import users from './users_reducer';
import movies from './movie_reducer';
import genres from './genre_reducer';
import watchlist from './watchlist_reducer';

export default combineReducers({
  users,
  movies,
  genres,
  watchlist,
});  