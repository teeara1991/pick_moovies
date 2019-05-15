import React from 'react';
import proptypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMovieCard: -1
    };
  }

  _handleChangeActiveMovieCard(index) {
    this.setState({activeMovieCard: index});
  }
  _handleCallbackFunc() {
  }

  render() {
    return this.props.films.map((value, index) => {
      return <MovieCard
        key={index}
        title={value.title}
        logo={value.logo}
        links={value.links}
        onPreview={() => this._handleCallbackFunc()}
        isActive={index === this.state.activeMovieCard}
        onChangeState={() => this._handleChangeActiveMovieCard(index)}
      />;
    });
  }

}

MovieList.propTypes = {
  films: proptypes.arrayOf(proptypes.shape({
    title: proptypes.string.isRequired,
    logo: proptypes.string.isRequired,
    links: proptypes.string.isRequired
  }))
};
