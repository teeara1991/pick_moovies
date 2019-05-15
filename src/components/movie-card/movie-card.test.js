import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from '../movie-card/movie-card.jsx';

it(`MovieCard correctly renders after relaunch`, () => {
  const tree = renderer
      .create(<MovieCard
        key={3}
        title={`Fantastic Beasts`}
        logo={``}
        links={``}
        onPreview={() => {}}
        isActive={true}
        onChangeState={() =>{}}
      />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
