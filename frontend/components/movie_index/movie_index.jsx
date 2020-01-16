import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import MovieIndexItem from './movie_index_item';
import { Link } from 'react-router-dom';

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sound: false,
        }
    }

    componentDidMount() {
        this.props.fetchMovies();
        const video = document.getElementById('back-video');
        video.play();
    }

    // unmute() {
    //     const video = document.getElementById('back-video');
    //     // video.muted() = !this.setState(sound)
    // }




    render() {   
        if (!this.props.movies[0]) this.props.movies[0] = '';

        const { movies } = this.props;

        return (
            <div>
                <div className='navdiv'>
                    <NavBarContainer />
                </div>
                <div className="title-div">
                    <h1 className='page-title'>Movies</h1>
                    <div className="genre-dropdown">
                        <button className="genre-dropbtn">Genres 
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="genre-dropdown-content">
                            <Link to='/genres/1'>Action</Link>
                            <Link to='/genres/2'>Comedy</Link>
                            <Link to='/genres/3'>Documentary</Link>
                            <Link to='/genres/4'>Drama</Link>
                            <Link to='/genres/5'>Horror</Link>
                            <Link to='/genres/6'>Sports</Link>
                            <Link to='/genres/7'>Thrillers</Link>
                            <Link to='/genres/8'>Sci-Fi</Link>
                        </div>
                    </div>
                    <div className='background-video-div'>
                        <img className="background-video-logo" src="https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/joker-logo.png" alt="spacejamlogo"/>
                        <h5 className="background-video-description">Forever alone in a crowd, failed comedian 
                            Arthur Fleck seeks connection as he walks the streets 
                            of Gotham City. Arthur wears two masks -- the one he 
                            paints for his day job as a clown, and the guise he 
                            projects in a futile attempt to feel like he's part 
                            of the world around him. Isolated, bullied and disregarded 
                            by society, Fleck begins a slow descent into madness as he 
                            transforms into the criminal mastermind known as the Joker.
                        </h5>
                    </div>
                </div>
                <video 
                    className='background-video'
                    id = 'back-video'
                    src="https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/joker.mp4"
                    // https://media.w3.org/2010/05/sintel/trailer_hd.mp4 
                    autoPlay={true}
                    muted="muted"
                />
                <div className='movie-index'>
                    {
                        movies.map(movie => (
                            <MovieIndexItem
                                movie={movie}
                                key={`${movie.id}`}
                            />
                        ))
                    }
                </div>                
            </div>
        )
    }
}

export default MovieIndex;