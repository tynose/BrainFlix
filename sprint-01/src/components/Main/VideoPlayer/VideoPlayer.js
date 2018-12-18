import React, { Component } from 'react';
import './VideoPlayer.scss'
import PrimaryVideo from './PrimaryVideo/PrimaryVideo';
import SecondaryVideos from './SecondaryVideos/SecondaryVideos';

class VideoPlayer extends Component {
  render() {
    const { videoData, activeVideoId, onVideoChange } = this.props;

    const primaryVideoData = videoData.filter(video => video.id === activeVideoId);

    
    return ( 
        <div className='videoPlayer'>
          <PrimaryVideo 
            primaryVideoData={primaryVideoData[0]} />
          <SecondaryVideos
            onVideoChange={onVideoChange}
            videoData={videoData}
            activeVideoId={activeVideoId}
          />
        </div>
     );
  }
}
 
export default VideoPlayer;