import React, { Component } from 'react';
import './PrimaryVideo.scss';
import PrimaryVideoTheatre from './PrimaryVideoTheatre/PrimaryVideoTheatre';
import PrimaryVideoChannel from './PrimaryVideoChannel/PrimaryVideoChannel';
import PrimaryVideoComments from './PrimaryVideoComments/PrimaryVideoComments';

class PrimaryVideo extends Component {
  render() { 
        
    const { activeVideo, commentSubmit, deleteComment } = this.props;
    return ( 
      <div className='primaryVideo' id={activeVideo.id}>
        <PrimaryVideoTheatre {...activeVideo} />
        <PrimaryVideoChannel {...activeVideo} />
        <PrimaryVideoComments {...activeVideo} commentSubmit={commentSubmit} deleteComment={deleteComment}/>
      </div>
     );
  }
}
 
export default PrimaryVideo;