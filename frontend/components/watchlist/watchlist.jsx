import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import MovieIndexItem from '../movie_index/movie_index_item';

class Watchlist extends React.Component {
    componentDidMount() {
        this.props.fetchWatchlist();
        this.props.fetchMovies();
    }

    render() {
        if (!this.props.watchlist) {
            return null;
        }

        if ( !this.props.movies ) {
            return null;
        }


        const { watchlist, movies } = this.props;
        const id = watchlist.movieId;
    

        if (!movies[id]) {
            return null;
        }
        
        console.log(movies[id]);
        return(
            <div>
                <div className='navdiv'>
                    <NavBarContainer />
                </div>
                <h1 className='page-title'>My List</h1>
                <div className='watchlist'>
                </div>       
                <MovieIndexItem 
                    movie={movies[id]}
                    // key={movie.id}
                />
            </div>            
        )
    }
}

export default Watchlist;