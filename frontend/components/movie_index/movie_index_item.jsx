import React from 'react';
import { Link } from 'react-router-dom'
import { addToWatchlist } from '../../util/watchlist_api_util';

class MovieIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }

    handleAdd(e) {
        console.log('hitting here');
        e.preventDefault();
        const movie = Object.assign({}, {movie_id: this.props.movie.id});
        this.props.addToWatchlist(movie);
    }

    handleRemove(e) {
        e.preventDefault();
        const movie = Object.assign({}, {movie_id: this.props.movie.id});
        this.props.removeFromWatchlist(movie.movie_id);
        // console.log(movie.movie_id);
    }

    onMouseEnterHandler() {
        this.setState({
            hover: true,
        });

        setTimeout(() => { const video = document.getElementById('thumbnail-video');
        if (video !== null) video.play()}, 500);
    }

    onMouseLeaveHandler() {
        this.setState({
            hover:false,
        });
    }

    render() {
        // console.log('props');
        // console.log(this.props);
        const { movie } = this.props

        let display;
        let watchlistBtn;
        let watchlistRemove;
        if (this.state.hover) {
            display = <video 
                id='thumbnail-video' 
                className='movie-thumbnail'
                src={movie.videoUrl}
                autoPlay muted>
                </video>

            watchlistBtn = 
                    <button 
                        className = 'watchlist-btn'
                        title='Add to Watchlist'
                        onMouseEnter = {this.onMouseEnterHandler}
                        onMouseLeave = {this.onMouseLeaveHandler}
                        >
                        <i className='fas fa-plus-circle' ></i>
                    </button>
            
            watchlistRemove =
                    <button 
                        className = 'watchlist-btn'
                        title='Remove from Watchlist'
                        onMouseEnter = {this.onMouseEnterHandler}
                        onMouseLeave = {this.onMouseLeaveHandler}
                        >
                        <i class="fas fa-minus-circle"></i>
                    </button>
        }else{
            display = <img id='thumbnail-img' 
            className='movie-thumbnail' 
            src={movie.photoUrl} alt="Space Jam"/>

            watchlistBtn = '';

            watchlistRemove = '';
        }

        return (

            <div className='movie-index-item'>
                                <form onSubmit={this.handleAdd}>
                    <input type="hidden" value={movie.id}/>
                    {watchlistBtn}
                </form>
                <form onSubmit={this.handleRemove}>
                    <input type="hidden" value={movie.id}/>
                    {watchlistRemove}
                </form>
                <Link 
                    id="thumbnail" 
                    to={`/movies/${movie.id}`}
                    onMouseEnter = {this.onMouseEnterHandler}
                    onMouseLeave={this.onMouseLeaveHandler}>
                    {display}
                    {/* <img id='thumbnail-img' className='movie-index-item thumbnail-display' src={movie.photoUrl} alt="Space Jam"/>
                    <video id='thumbnail-video' className='movie-index-item thumbnail-stop'src={movie.videoUrl}></video> */}
                </Link>
                {/* <div className='movie-details'>
                    <div className='movie-title'>
                        {movie.title}
                    </div>
                </div> */}
                {/* <form onSubmit={this.handleAdd}>
                    <input type="hidden" value={movie.id}/>
                    {watchlistBtn}
                </form>
                <form onSubmit={this.handleRemove}>
                    <input type="hidden" value={movie.id}/>
                    {watchlistRemove}
                </form> */}
            </div>
        )
    }
}

export default MovieIndexItem;