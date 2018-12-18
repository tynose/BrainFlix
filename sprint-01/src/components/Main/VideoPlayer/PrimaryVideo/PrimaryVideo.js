import React, { Component } from 'react';
import './PrimaryVideo.scss';
import PrimaryVideoTheatre from './PrimaryVideoTheatre/PrimaryVideoTheatre';
import PrimaryVideoChannel from './PrimaryVideoChannel/PrimaryVideoChannel';
import PrimaryVideoComments from './PrimaryVideoComments/PrimaryVideoComments';

class PrimaryVideo extends Component {
  render() { 
    const videoData = this.props.primaryVideoData;
    return ( 
      <div className='primaryVideo'>
        <PrimaryVideoTheatre {...videoData}/>
        <PrimaryVideoChannel {...videoData}/>
        <PrimaryVideoComments {...videoData}/>
      </div>
     );
  }
}
 
export default PrimaryVideo;