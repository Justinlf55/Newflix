import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import { fetchGenres, fetchGenre } from '../../actions/genre_actions';
import { addToWatchlist } from '../../actions/watchlist_actions';
import MovieIndex from './movie_index';

const mapStateToProps = state => ({
    movies: Object.values(state.entities.movies),
    genres: Object.values(state.entities.genres),
 });

const mapDispatchToProps = dispatch => ({
    fetchMovies: filter => dispatch(fetchMovies(filter)),
    fetchGenre: id => dispatch(fetchGenre(id)),
    fetchGenres: () => dispatch(fetchGenres()),
    addToWatchlist: movie => dispatch(addToWatchlist(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);