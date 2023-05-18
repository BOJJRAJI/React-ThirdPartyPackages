import {Component} from 'react'
import ReactPlayer from 'react-player'

import './index.css'

class VideoPlayer extends Component {
  state = {isPlay: false}

  toggleVideo = () => {
    this.setState(prevState => ({isPlay: !prevState.isPlay}))
  }

  render() {
    const {isPlay} = this.state
    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=T0BcSV2Suiw"
            playing={isPlay}
            height={300}
            width={700}
          />
          <button onClick={this.toggleVideo} type="button" className="button">
            PlayVideo
          </button>
        </div>
      </div>
    )
  }
}

export default VideoPlayer

