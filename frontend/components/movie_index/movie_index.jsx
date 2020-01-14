import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import MovieIndexItem from './movie_index_item';
import { Link } from 'react-router-dom';

class MovieIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false,
        }

        this.handleGenreToggle = this.handleGenreToggle.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovies();
        const video = document.getElementById('back-video');
        debugger
        video.play();
    }

    handleGenreToggle() {
        this.setState({on: !this.state.on})
        console.log(this.state);
    }

    render() {
        // let genreToggle = this.state.on ? 'genre-toggle-off' : 'genre-toggle-on';
        
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
                    <video 
                        className='background-video'
                        id = 'back-video'
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" 
                        autoPlay>
                    </video>
                </div>
                <div className='movie-index'>
                    {
                        movies.map(movie => (
                            <MovieIndexItem
                                movie={movie}
                                key={movie.id}
                            />
                        ))
                    }
                </div>                
            </div>
        )
    }
}

export default MovieIndex;