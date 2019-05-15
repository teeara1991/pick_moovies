import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from '../movie-list/movie-list.jsx';

it(`MovieList correctly renders after relaunch`, () => {
  const tree = renderer
      .create(<MovieList
        films={[
          {
            genre: `fantasy`,
            title: `Harry Potter`,
            logo: `https://st.kp.yandex.net/images/film_iphone/iphone360_689.jpg`,
            links: ``,
          },
          {
            genre: `fantasy`,
            title: `Harry Potter2`,
            logo: `https://upload.wikimedia.org/wikipedia/ru/thumb/0/0b/Harry_Potter_and_the_Chamber_of_Secrets_%E2%80%94_movie.jpg/219px-Harry_Potter_and_the_Chamber_of_Secrets_%E2%80%94_movie.jpg`,
            links: ``,
          }]
        }
      />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
