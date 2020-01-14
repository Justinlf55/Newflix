import React from 'react';
import { Player } from 'video-react';


class MovieShow extends React.Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.movieId);
    }

    render () {
        if (this.props.movie === undefined) {
            return null
        }

        const { movie } = this.props;
        
        return (
            <div>
                <video 
                    className='video-player' 
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" 
                    controls>
                </video>
                {/* <div className='controls'>
                    <div className='time-bar'>
                        <div className='color-bar'></div>
                    </div>
                    <div className='video-button'>
                        <button className='play-pause'></button>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default MovieShow;