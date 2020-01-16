import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import { addToWatchlist } from '../../actions/watchlist_actions';
import MovieIndex from './movie_index';

const mapStateToProps = state => ({
        movies: Object.values(state.entities.movies)
 });

const mapDispatchToProps = dispatch => ({
    fetchMovies: filter => dispatch(fetchMovies(filter)),
    addToWatchlist: movie => dispatch(addToWatchlist(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);