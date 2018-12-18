import React, { Component } from 'react';
import './SecondaryVideos.scss';
import SecondaryCard from './SecondaryCard/SecondaryCard';

class SecondaryVideos extends Component {
  render() { 
    let videos = this.props.videoData;
    return ( 
      <div className='secondaryVideos'>
        <h5 className='secondaryVideos__header'>Up Next</h5>
        {videos.map(video =>
          <SecondaryCard
            // {...video}
            isActive={video.id === this.props.activeVideoId}
            id={video.id}
            thumbnail={video.thumbnail}
            videoTitle={video.videoTitle}
            channel={video.channel}
            views={video.views}
            onClick={this.props.onVideoChange}
          />
        )}        
      </div>
     );
  }
}
 
export default SecondaryVideos;