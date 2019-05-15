import React from 'react';
import proptypes from 'prop-types';
import MovieList from '../movie-list/movie-list.jsx';

export default function App(props) {
  return <MovieList
    films={props.films}
  />;
}

App.propTypes = {
  films: proptypes.arrayOf(proptypes.shape({
    title: proptypes.string.isRequired,
    logo: proptypes.string.isRequired,
    links: proptypes.string.isRequired
  }))
};
