import React from 'react';
import { Link } from 'react-router-dom'

class MovieIndexItem extends React.Component {
    render() {
        const { movie } = this.props

        return (
            <div >
                <Link to={`/movies/${movie.id}`}><img className='movie-index-item' src={movie.photoUrl} alt="Space Jam"/></Link>
            </div>
        )
    }
}

export default MovieIndexItem;