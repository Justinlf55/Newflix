import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <ul className='navbar'>
                    <li><Link className='navbar' to='/'>
                        <img className='logo' src={window.images.logo} alt="logo"/>
                    </Link></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/movies'>Movies</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;