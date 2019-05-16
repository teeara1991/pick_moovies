import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from '../video-player/video-player.jsx';

it(`MovieCard correctly renders after relaunch`, () => {
  const tree = renderer
      .create(<VideoPlayer
        isPlaying={`true`}
        onPlayButtonClick={() => {}}
        src={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
        poster={`https://i.ytimg.com/vi/HOfdboHvshg/hqdefault.jpg`}
      />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
