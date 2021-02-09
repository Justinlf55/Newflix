import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: false,
            input: '',
            filtered: [],
        }

        this.toggle = this.toggle.bind(this);
        this.filterMovies = this.filterMovies.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    toggle() {
        this.setState({
            toggle: !this.state.toggle,
        });
    }

    filterMovies(e) {
        let movies = Object.values(this.props.movies);
        let genres = Object.values(this.props.genres);
        
        movies = movies.filter(movie => {
            return movie.title.toLowerCase().includes(e.target.value);
        })

        this.setState({
            filtered: movies,
        })
    };


    
    render() {
        let { currentUser, logout } = this.props;

        if (!this.props.movies[0]) this.props.movies[0] = '';

        const { movies } = this.props;

        let searchBar;
        if (this.state.toggle) {
            searchBar = <input id='nav-search' type="text" placeholder="Movies, Genres" onChange={this.filterMovies} />
        } else {
            searchBar = ''
        }

        return (
            <div className='full-nav'>
                <div className='nav-left'>
                    <ul className='navbar'>
                        <li><Link to='/movies'>
                            <img className='navbar-logo' src={window.images.logo} alt="logo"/>
                        </Link></li>
                        <li><Link to='/movies'>Home</Link></li>
                        <li><Link to='/movies'>Movies</Link></li>
                        <li><Link to='/my-list'>My List</Link></li>
                    </ul>
                </div>
                <div className='nav-right'>
                    <ul className='navbar'>
                        <li>
                            <div className="search-wrapper">
                                <div className='searchbar'>
                                    {searchBar}
                                    {
                                        this.state.filtered.map(movie => (
                                                <li id="search-result">
                                                    <Link
                                                        to={`/movies/${movie.id}`}
                                                    >
                                                    <img className="search-thumbnail" src={movie.photoUrl} />{movie.title}
                                                    </Link>
                                                </li>
                                        ))
                                    }
                                    <div className='search-icon' onClick = {this.toggle}>
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><i className="fas fa-bell"></i></li>
                        <li>
                            <div className='icon-menu'>
                                <img src={window.images.icon} alt="icon"/> 
                                <i className="fas fa-caret-down"></i>
                                <div className='icon-dropdown'>
                                    <p className='icon-dropdown-text'>Account</p>
                                    <p className='icon-dropdown-text'>Help Center</p>
                                    <button className='signout-button' onClick={logout}>Sign out of Newflix</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar;