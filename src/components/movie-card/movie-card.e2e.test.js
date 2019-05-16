import React from 'react';
import {shallow, configure} from 'enzyme';
import MovieCard from './movie-card';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it(`Callback gets activeMovieCard after click`, () => {
  const mouseOverHandler = jest.fn();
  const movie = shallow(
      <MovieCard
        key={3}
        title={`Fantastic Beasts`}
        logo={``}
        links={``}
        isActive={true}
        onChangeState={mouseOverHandler} />);
  const a = movie.find(`article`);
  expect(a.exists).toBeTruthy();
  a.simulate(`mouseover`);
  expect(mouseOverHandler).toHaveBeenCalledTimes(1);
});
