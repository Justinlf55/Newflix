import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import MovieIndexItem from './movie_index_item';
import { Link } from 'react-router-dom';
import GenreCarouselContainer from '../genre_carousel/genre_carousel_container';


class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sound: false,
        }
        // this.unmute = this.unmute.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovies();
        this.props.fetchGenres();
        // for (let i = 1; i < 9; i++) {
        //     this.props.fetchGenre(i);
        // }
        const video = document.getElementById('back-video');
        video.play();
    }

    unmute() {
        const video = document.getElementById('back-video');
        if (!video.muted) video.muted = false;
    }




    render() {   

        // console.log(this.props);
        
        if (!this.props.movies[0]) this.props.movies[0] = '';

        const { movies, addToWatchlist } = this.props;

        if (!this.props.genres[0]) this.props.genres[0] = '';

        const { genres } = this.props;
 
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
                        {/* <button onClick={this.unumute}>Sound</button> */}
                    </div>
                </div>
                <video 
                    className='background-video'
                    id = 'back-video'
                    src="https://newflix-aa-seeds.s3-us-west-1.amazonaws.com/joker.mp4"
                    // https://media.w3.org/2010/05/sintel/trailer_hd.mp4 
                    autoPlay={true}
                    muted="muted"
                    loop
                />
                <div className='movie-index'>
                    <div className='row'>
                        {
                            movies.map(movie => (
                                <MovieIndexItem
                                    movie={movie}
                                    addToWatchlist={addToWatchlist}
                                    key={`${movie.id}`}
                                />
                            ))
                        }
                    </div>
                </div>               
            </div>
        )
    }
}

export default MovieIndex;