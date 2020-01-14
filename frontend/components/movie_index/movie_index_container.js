import { connect } from 'react-redux';
import React from 'react';
import { fetchMovies } from '../../actions/movie_actions';
import MovieIndex from './movie_index';

const mapStateToProps = state => ({
        movies: Object.values(state.entities.movies)
 });

const mapDispatchToProps = dispatch => ({
    fetchMovies: filter => dispatch(fetchMovies(filter))  
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);