import React from 'react';
import NavBar from '../navbar/navbar';

class MovieIndex extends React.Component {
    render() {
        return (
            <div>
                <div className='navdiv'>
                    <NavBar />
                </div>
                <div className='movie-index'>
                </div>                
            </div>
        )
    }
}

export default MovieIndex;