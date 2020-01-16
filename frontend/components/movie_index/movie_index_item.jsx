import React from 'react';
import { Link } from 'react-router-dom'

class MovieIndexItem extends React.Component {
    constructor(props) {
        super(props);

        // this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        setTimeout((this.props.processForm(user)),this.totalTimer);
    }

    render() {
        const { movie } = this.props

        return (

            <div >
                <Link id="thumbnail" to={`/movies/${movie.id}`}><img className='movie-index-item' src={movie.photoUrl} alt="Space Jam"/></Link>
                <form></form>
                <input type="submit"/>
            </div>
        )
    }
}

export default MovieIndexItem;