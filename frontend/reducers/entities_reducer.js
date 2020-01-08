import { combineReducers } from 'redux';

import users from './users_reducer';
import movies from './movie_reducer';

export default combineReducers({
  users,
  movies
});