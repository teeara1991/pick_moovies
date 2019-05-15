import React from 'react';
import proptypes from 'prop-types';

export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };
    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }
  render() {
    const {isLoading, isPlaying} = this.state;
    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={this._onPlayButtonClick}
        />
        <div className="track__status">
          <video
            ref={this._videoRef}
          />
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;
    video.src = src;
    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });
    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };
    video.onpause = () => this.setState({
      isPlaying: false,
    });
    video.ontimeupdate = () => this.setState({
      progress: video.currentTime
    });
  }
  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
  componentWillUnmount() {
    const video = this._videoRef.current;
    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.src = ``;
  }
  _onPlayButtonClick() {
    this.props.onPlayButtonClick();
    this.setState({isPlaying: !this.state.isPlaying});
  }
}
VideoPlayer.propTypes = {
  isPlaying: proptypes.bool.isRequired,
  onPlayButtonClick: proptypes.func.isRequired,
  src: proptypes.string.isRequired,
};
