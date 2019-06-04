import React, { Component } from "react";
import VideoControlContainer from "./VideoControlContainer";
import VideoCaption from "./VideoCaption";
import "./App.css";

class App extends Component {
  videoURL =
    "https://s3.ap-northeast-2.amazonaws.com/wizschool-class-videos/basic_1_2.mp4";

  state = { videRef: undefined };
  constructor(props) {
    super(props);
    this.state = {
      captionTime: 0,
      isSubtitleVisible: false
    };
  }

  setVideoRef = ref => {
    if (!ref) {
      console.log("setVideoRef null");
      return;
    }
    this.setState({ videoRef: ref });
  };

  handleTimeUpdate = e => {
    this.setState({
      captionTime: e.currentTarget.currentTime
    });
  };

  handleSubtitle = visible => {
    this.setState({ isSubtitleVisible: visible });
  };

  render() {
    const { videoRef, captionTime, isSubtitleVisible } = this.state;

    return (
      <div>
        <h1>Video Custom</h1>
        <div>
          <video
            ref={this.setVideoRef}
            width="500"
            onTimeUpdate={this.handleTimeUpdate}
          >
            <source src={this.videoURL} type="video/mp4" />
          </video>
        </div>
        <VideoControlContainer
          videoRef={videoRef}
          onClickSubtitle={this.handleSubtitle}
        />
        {isSubtitleVisible && <VideoCaption captionTime={captionTime} />}
      </div>
    );
  }
}

export default App;
