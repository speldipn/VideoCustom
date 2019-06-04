import React, { Component } from "react";
import FullScreenExit from "./image/fullscreen-exit.svg";
import Fullscreen from "./image/fullscreen.svg";
import Pause from "./image/pause.svg";
import Play from "./image/play-arrow.svg";
import Next from "./image/skip-next.svg";
import SubtitlesOff from "./image/subtitles-off.svg";
import SubtitlesOn from "./image/subtitles-on.svg";
import Video from "./image/video.svg";
import VolumeOff from "./image/volume-off.svg";
import VolumeOn from "./image/volume-on.svg";

import "./VideoControlContainer.scss";

/* 
	 (1) play time progress
	 (2) play/stop
	 (3) next
	 (4) full screen on/off
	 (5) subtitle
	 (6) pip
	 (7) sound on/mute  + progress bar
	 */

/* 
   (1) event
   (2) video URL
   */

class VideoControlContainer extends Component {
  init = false;
  constructor(props) {
    super(props);
  }

  onTimeUpdate = e => {
    console.log(e.target.currentTime.toFixed(1), "sec");
    const { progressRef } = this.state;
    if (progressRef) {
      var percentage = Math.floor(
        (100 / e.target.duration) * e.target.currentTime
      );
      progressRef.value = percentage;
    }
  };

  componentDidMount() {} // TODO

  componentDidUpdate() {
    const { videoRef } = this.props;
    if (this.init == false && videoRef) {
      videoRef.ontimeupdate = this.onTimeUpdate;
      this.init = true; // TODO: remove
    }
  }

  onClickPlay = () => {
    const { videoRef } = this.props;
    videoRef.play();
  };

  onClickPause = () => {
    const { videoRef } = this.props;
    videoRef.pause();
  };

  onClickNext = () => {}; // TODO: skip to next video

  onClickVolumeOn = () => {
    const { videoRef } = this.props;
    videoRef.muted = true;
  };

  onClickVolumeOff = () => {
    const { videoRef } = this.props;
    videoRef.muted = true;
  };

  onChangeVolumeProgress = event => {
    const { videoRef } = this.props;
    let currentVolume = (event.target.value / 100).toFixed(1);
    if (currentVolume <= 0) videoRef.muted = true;
    else videoRef.muted = false;
    videoRef.volume = currentVolume;
  };

  onClickSubtitleOn = () => {
    this.props.onClickSubtitle(true);
  };

  onClickSubtitleOff = () => {
    this.props.onClickSubtitle(false);
  };

  onClickFullscreen = () => {
    const { videoRef } = this.props;
    if (videoRef.requestFullscreen) {
      videoRef.requestFullscreen();
    } else if (videoRef.mozRequestFullScreen) {
      /* Firefox */
      videoRef.mozRequestFullScreen();
    } else if (videoRef.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      videoRef.webkitRequestFullscreen();
    } else if (videoRef.msRequestFullscreen) {
      /* IE/Edge */
      videoRef.msRequestFullscreen();
    }
  };

  onClickFullscreenExit = () => {
    const { videoRef } = this.props;
    if (videoRef.exitFullscreen) {
      videoRef.exitFullscreen();
    } else if (videoRef.mozCancelFullScreen) {
      /* Firefox */
      videoRef.mozCancelFullScreen();
    } else if (videoRef.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      videoRef.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      videoRef.msExitFullscreen();
    }
  };

  onClickSeek = e => {
    const { videoRef } = this.props;
    const { progressRef } = this.state;
    var percent = (e.pageX / progressRef.offsetWidth) * 100;
    let value = (videoRef.duration * percent) / 100;
    videoRef.currentTime = value;
  };

  setProgressBar = ref => {
    if (ref) {
      this.setState({ progressRef: ref });
    }
  };

  render() {
    return (
      <div className="Control">
        <div className="Control__Progress">
          <progress
            ref={this.setProgressBar}
            min="0"
            max="100"
            value="0"
            onClick={this.onClickSeek}
          />
        </div>

        <input type="image" src={Play} onClick={this.onClickPlay} alt="Play" />
        <input
          type="image"
          src={Pause}
          onClick={this.onClickPause}
          alt="Pause"
        />
        <input
          type="image"
          src={Next}
          onClick={this.onClickNext}
          alt="Skip to next"
        />
        <input
          type="image"
          src={VolumeOn}
          onClick={this.onClickVolumeOn}
          alt="Volume"
        />
        <input
          type="image"
          src={VolumeOff}
          onClick={this.onClickVolumeOff}
          alt="Mute"
        />
        <input
          type="range"
          min="0"
          max="100"
          onChange={this.onChangeVolumeProgress}
          alt="Volume bar"
        />
        {/* Floating video */}
        {/* <input type="image" src={Video} /> */}
        <input
          type="image"
          src={SubtitlesOn}
          onClick={this.onClickSubtitleOn}
          alt="Subtitle on"
        />
        <input
          type="image"
          src={SubtitlesOff}
          onClick={this.onClickSubtitleOff}
          alt="Subtitle off"
        />
        <input
          type="image"
          src={Fullscreen}
          onClick={this.onClickFullscreen}
          alt="Fullscreen"
        />
        <input
          type="image"
          src={FullScreenExit}
          onClick={this.onClickFullscreenExit}
          alt="Fullscreen exit"
        />
      </div>
    );
  }
}

export default VideoControlContainer;
