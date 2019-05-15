import React from 'react';
import {shallow, configure} from 'enzyme';
import App from './app';
import Adapter from 'enzyme-adapter-react-16';
import MovieList from '../movie-list/movie-list.jsx';

configure({adapter: new Adapter()});

it(`App changes the text after click`, () => {
  const clickHandler = jest.fn();
  const app = shallow(
      <App films={[
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
      onClick={clickHandler} />);
  const a = app.find(<MovieList/>);
  expect(a.exists).toBeTruthy();
});
