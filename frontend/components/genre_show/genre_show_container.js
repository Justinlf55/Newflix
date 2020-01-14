import { connect } from 'react-redux';

import { fetchGenre } from '../../actions/genre_actions';
import { selectGenre } from '../../reducers/selectors';
import GenreShow from './genre_show';

const mapStateToProps = (state, ownProps) => {
  const genreId = ownProps.match.params.genreId;
  const genre = selectGenre(state.entities, genreId);
  // const genre = Object.values(state.entities.genres)
  return {
    genreId,
    genre, 
  };
};

const mapDispatchToProps = dispatch => ({
  fetchGenre: id => dispatch(fetchGenre(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreShow);