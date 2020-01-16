import React from 'react';



class MovieShow extends React.Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.movieId);
        const video = document.getElementById('movie-player');
        if (video !== null) video.play();
    }

    render () {
        if (this.props.movie === undefined) {
            return null
        }

        const { movie } = this.props;
    
        return (
            <div className='video-show'>
                <video 
                    className='video-player' 
                    id = 'movie-player'
                    src={movie.videoUrl}
                    controls>
                </video>
            </div>
        )
    }
}

export default MovieShow;