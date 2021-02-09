import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import MovieIndexItem from '../movie_index/movie_index_item';

class GenreShow extends React.Component {
    componentDidMount() {
        this.props.fetchGenre(this.props.match.params.genreId);
    }

    render() {
        if (!this.props.genre) {
            return null;
        }

        if (!this.props.genre.movies) {
            return null;
        }

        const { movies } = this.props.genre
        const { addToWatchlist, removeFromWatchlist } = this.props
        
        return (
            <div>
                <div className='navdiv'>
                    <NavBarContainer />
                </div>
                <div className="movie-genre-div">
                    <h4 className='movie-genre'>Movies</h4>
                    <h1 className='genre-name'>{this.props.genre.name}</h1>
                </div>
                <div className='genre-movie-index'>
                    {
                        movies.map(movie => (
                            <MovieIndexItem
                                movie={movie}
                                key={movie.id}
                                addToWatchlist={addToWatchlist}
                                removeFromWatchlist={removeFromWatchlist}
                            />
                        ))
                    }
                </div>                
            </div>
        )
    }
}

export default GenreShow;