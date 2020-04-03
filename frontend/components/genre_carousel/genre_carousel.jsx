import React from 'react';

class GenreCarousel extends React.Component {
    constructor(props) {
        super(props)

        this.genreMovies = [];
        for (let i = 1; i < 8; i ++) {
            this.genreMovies.push(this.props.fetchGenre(i));
        }
    }

    componentDidMount() {
        this.props.fetchGenres();
    }

    render() {
        if (!this.props.genres[0]) this.props.genres[0] = '';

        const { genres } = this.props;

        return (
            <h1>CAROUSEL</h1>
        );
    }
}

export default GenreCarousel;