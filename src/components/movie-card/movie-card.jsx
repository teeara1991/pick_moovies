import React from 'react';
import proptypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';


export default class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }
  render() {
    const {onChangeState, isActive, onPreview, logo, title, links} = this.props;
    const {isPlaying} = this.state;
    return <article onMouseOver={onChangeState} className={`small-movie-card catalog__movies-card ${isActive ? `active` : ``}`}>
      {/* <button className="small-movie-card__play-btn" type="button" onClick={onPreview}>Play</button> */}
      <VideoPlayer
        isPlaying={isPlaying}
        onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
        src={links}
      />
      <div className="small-movie-card__image"><img src={logo} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={links}>{title}</a>
      </h3>
    </article>;
  }
}
MovieCard.propTypes = {
  title: proptypes.string.isRequired,
  logo: proptypes.string.isRequired,
  links: proptypes.string.isRequired,
  onPreview: proptypes.func.isRequired,
  onChangeState: proptypes.func.isRequired,
  isActive: proptypes.bool.isRequired
};

