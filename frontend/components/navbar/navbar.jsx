import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        let { currentUser, logout } = this.props;

        return (
            <div className='full-nav'>
                <div className='nav-left'>
                    <ul className='navbar'>
                        <li><Link to='/'>
                            <img className='navbar-logo' src={window.images.logo} alt="logo"/>
                        </Link></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/movies'>Movies</Link></li>
                        <li><Link to='/my-list'>My List</Link></li>
                    </ul>
                </div>
                <div className='nav-right'>
                    <ul className='navbar'>
                        <li>
                            <div className="search-wrapper">
                                <div className='searchbar'>
                                    <input type="text" placeholder="Movies, Genres" />
                                    <div className='search-icon'>
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