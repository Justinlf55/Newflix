import React from 'react';
import { Link } from 'react-router-dom'

class MovieIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const movie = Object.assign({}, {movie_id: this.props.movie.id});
        this.props.addToWatchlist(movie);
    }

    render() {
        const { movie } = this.props

        return (

            <div>
                <Link id="thumbnail" to={`/movies/${movie.id}`}><img className='movie-index-item' src={movie.photoUrl} alt="Space Jam"/></Link>
                <form onSubmit={this.handleSubmit}>
                    <input type="hidden" value={movie.id}/>
                    <button className='watchlist-btn'><i className="fas fa-plus"></i></button>
                </form>
            </div>
        )
    }
}

export default MovieIndexItem;