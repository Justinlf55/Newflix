import { connect } from 'react-redux';

import { fetchGenre, fetchGenres } from '../../actions/genre_actions';
import { selectGenre } from '../../reducers/selectors';
import GenreCarousel from './genre_carousel';

const mapStateToProps = (state) => {
    const genreMovies = [];
    for (let i = 1; i < 8; i ++) {
        genreMovies.push(fetchGenre(i));
    }
    return({
        genres: Object.values(state.entities.genres),
        genreMovies: genreMovies
    })
};

const mapDispatchToProps = dispatch => ({
    fetchGenre: id => dispatch(fetchGenre(id)),
    fetchGenres: () => dispatch(fetchGenres()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreCarousel);