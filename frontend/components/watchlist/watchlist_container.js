import { connect } from 'react-redux';

import { fetchWatchlist } from '../../actions/watchlist_actions';
import { fetchMovies } from '../../actions/movie_actions';
import { selectMovie } from '../../reducers/selectors';
import Watchlist from '../watchlist/watchlist';

const mapStateToProps = state => ({
    watchlist: Object.values(state.entities.watchlist),
    movies: state.entities.movies
});

const mapDispatchToProps = dispatch => ({
    fetchWatchlist: watchlist => dispatch(fetchWatchlist(watchlist)),
    selectMovie: movieId => dispatch(selectMovie(movieId)),
    fetchMovies: filter => dispatch(fetchMovies(filter)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);