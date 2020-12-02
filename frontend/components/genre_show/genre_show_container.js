import { connect } from 'react-redux';

import { fetchGenre } from '../../actions/genre_actions';
import { selectGenre } from '../../reducers/selectors';
import { addToWatchlist, removeFromWatchlist } from '../../actions/watchlist_actions';
import GenreShow from './genre_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const genreId = ownProps.match.params.genreId;
  const genre = selectGenre(state.entities, genreId);
  return {
    genreId,
    genre, 
  };
};

const mapDispatchToProps = dispatch => ({
  fetchGenre: id => dispatch(fetchGenre(id)),
  addToWatchlist: movie => dispatch(addToWatchlist(movie)),
  removeFromWatchlist: id => dispatch(removeFromWatchlist(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GenreShow));