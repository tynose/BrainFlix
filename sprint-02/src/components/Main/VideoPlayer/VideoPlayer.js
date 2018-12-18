import React, { Component } from 'react';
import './VideoPlayer.scss'
import PrimaryVideo from './PrimaryVideo/PrimaryVideo';
import SecondaryVideos from './SecondaryVideos/SecondaryVideos';

class VideoPlayer extends Component {
  render() {
    const {
      videoData,
      activeVideo,
      onVideoChange,
      videoPath
    } = this.props;

    
    return ( 
        <div className='videoPlayer'>
        {activeVideo ? <PrimaryVideo activeVideo={activeVideo} /> : null}
          <SecondaryVideos
            onVideoChange={onVideoChange}
            videoData={videoData}
            activeVideo={activeVideo}
            videoPath={videoPath}
          />
        </div>
     );
  }
}
 
export default VideoPlayer;