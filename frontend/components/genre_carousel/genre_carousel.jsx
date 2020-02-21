import React from 'react';

class GenreCarousel extends React.Component {
    constructor(props) {
        super(props)

        this.genreMovies = [];
        for (let i = 1; i < 9; i ++) {
            this.genreMovies.push(this.props.fetchGenre(i));
        }
    }

    componentDidMount() {
        this.props.fetchGenres();
    }

    render() {
        console.log(this.genreMovies);
        if (!this.props.genres[0]) this.props.genres[0] = '';

        const { genres } = this.props;

        console.log(this.genreMovies);
        return (
            <h1>Carousel</h1>
        );
    }
}

export default GenreCarousel;