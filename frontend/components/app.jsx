import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import WelcomeContainer from './welcome/welcome_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import MovieIndexContainer from './movie_index/movie_index_container';
import MovieShowContainer from './movie_show/movie_show_container';
import GenreShowContainer from './genre_show/genre_show_container'
import WatchlistContainer from './watchlist/watchlist_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => (

  <div>
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/movies" component={MovieIndexContainer} />
      <ProtectedRoute exact path="/my-list" component={WatchlistContainer} />
      <ProtectedRoute path="/movies/:movieId" component={MovieShowContainer} />
      <ProtectedRoute path="/genres/:genreId" component={GenreShowContainer} />
    </Switch>
  </div>
);

export default App;