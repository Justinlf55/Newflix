import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import MovieIndexItem from '../movie_index/movie_index_item';

class Watchlist extends React.Component {
    componentDidMount() {
        this.props.fetchWatchlist();
        this.props.fetchMovies();
    }

    render() {
        if ( !this.props.movies ) {
            return null;
        }

        console.log('between movies and watchlist props')
        if (!this.props.watchlist) {
            return null;
        }


        let { watchlist, movies } = this.props;
        
        watchlist = watchlist.map(list => list.movieId)

        console.log(movies)
    

        if (!movies[watchlist[0]]) {
            return null;
        }
        
        // console.log(movies[id]);
        return(
            <div>
                <div className='navdiv'>
                    <NavBarContainer />
                </div>
                <h1 className='page-title'>My List</h1>
                <div className='watchlist'>
                </div> 
                {
                    watchlist.map( movieId => (
                        <MovieIndexItem 
                        movie={movies[movieId]}
                        key={movieId}
                    />                       
                    ))
                }      
            </div>            
        )
    }
}

export default Watchlist;