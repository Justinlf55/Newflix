import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { fetchMovies } from '../../actions/movie_actions';
import { fetchGenres } from '../../actions/genre_actions';
import NavBar from './navbar';

const mapStateToProps = state => {
    return {
      currentUser: state.entities.users[state.session.id],
      movies: Object.values(state.entities.movies),
      genres: Object.values(state.entities.genres),
    };
};


  
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchMovies: filter => dispatch(fetchMovies(filter)),
    fetchGenre: filter => dispatch(fetchGenre(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

// { session, entities: { users } }