import { connect } from 'react-redux';

import { fetchMovie } from '../../actions/movie_actions';
import { selectMovie } from '../../reducers/selectors';
import MovieShow from './movie_show';

const mapStateToProps = (state, ownProps) => {
  const movieId = ownProps.match.params.movieId;
  const movie = selectMovie(state.entities, movieId);
  return {
    movieId,
    movie 
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovie: id => dispatch(fetchMovie(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow);