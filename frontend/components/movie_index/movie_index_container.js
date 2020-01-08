import { connect } from 'react-redux';

import { fetchMovies } from '../../actions/movie_actions';
import MovieIndex from './movie_index';

const mapStateToProps = state => ({
    movies: 'Movies'
    // Object.values(state.entities.movies.title)
});

const mapDispatchToProps = dispatch => ({
    fetchMovies: filter => dispatch(fetchMovies(filter))  
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);