import React from 'react';
import proptypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';


export default class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
    this._handleChangeState = this._handleChangeState.bind(this);
  }
  _handleChangeState() {
    setTimeout(function () {
      this.setState({isPlaying: !this.state.isPlaying});
    }.bind(this), 1000);
  }
  render() {
    const {isActive, logo, title, links} = this.props;
    const {isPlaying} = this.state;
    return <article onMouseOver={this._handleChangeState} onMouseLeave={this._handleChangeState} className={`small-movie-card catalog__movies-card ${isActive ? `active` : ``}`}>
      <div className="small-movie-card__image">
        <VideoPlayer
          isPlaying={isPlaying}
          onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
          src={links}
          poster={logo}
        />
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
  isActive: proptypes.bool.isRequired
};

