import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import MovieIndexItem from '../movie_index/movie_index_item';
import { fetchWatchlist } from '../../util/watchlist_api_util';

class Watchlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watchlist: [],
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.setList = this.setList.bind(this);
    }

    componentDidMount() {
        this.props.fetchWatchlist().then(list => 
            this.setList(list)
        );

        this.props.fetchMovies();
    }

    setList(list) {
        console.log(list);

        // console.log(watchlistIds);
    }

    handleDelete(id) {
        let currentList = this.state.watchlist;
        let newList = currentList.filter(movie => (
            movie.id != id
        ))

        this.setState({
            watchlist: newList,
        })
    }


    render() {
        if ( !this.props.movies ) {
            return null;
        }

        if (!this.props.watchlist) {
            return null;
        }

        
        let { watchlist, movies, removeFromWatchlist } = this.props;
        watchlist = watchlist.map(list => list.movieId)


        if (!movies[watchlist[0]]) {
            return null;
        }
        
        return(
            <div>
                <div className='navdiv'>
                    <NavBarContainer />
                </div>
                <h1 className='page-title'>My List</h1>
                <div className='watchlist'>
                {
                    watchlist.map( movieId => (
                        <MovieIndexItem 
                        movie={movies[movieId]}
                        key={movieId}
                        removeFromWatchlist={removeFromWatchlist}
                        watchlistState = {this.state.watchlist}
                    />                       
                    ))
                }     
                </div>  
            </div>            
        )
    }
}

export default Watchlist;