import React from 'react';
import { Link } from 'react-router-dom'

class MovieIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const movie = Object.assign({}, {movie_id: this.props.movie.id});
        this.props.addToWatchlist(movie);
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
        const { movie } = this.props

        let display;
        if (this.state.hover) {
            display = <video 
                id='thumbnail-video' 
                className='movie-thumbnail'
                src={movie.videoUrl}
                autoPlay muted>
                </video>
        }else{
            display = <img id='thumbnail-img' 
            className='movie-thumbnail' 
            src={movie.photoUrl} alt="Space Jam"/>
        }

        return (

            <div className='movie-index-item'>
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
                <form onSubmit={this.handleSubmit}>
                    <input type="hidden" value={movie.id}/>
                    <button className='watchlist-btn'><i className="fas fa-plus"></i></button>
                </form>
            </div>
        )
    }
}

export default MovieIndexItem;