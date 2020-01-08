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
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
import MovieContainer from './movie_index/movie_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (

  <div>
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/movies" component={MovieContainer} />
    </Switch>
  </div>
);

export default App;