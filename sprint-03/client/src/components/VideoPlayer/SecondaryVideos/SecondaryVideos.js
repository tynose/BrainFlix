import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SecondaryVideos.scss';
import SecondaryCard from './SecondaryCard/SecondaryCard';

class SecondaryVideos extends Component {
  render() { 
    const videoData = this.props.videoData;
    const activeVideoId = this.props.match.params.videoId;  
    
    return ( 
      <div className='secondaryVideos'>
        <h5 className='secondaryVideos__header'>Up Next</h5>
        {videoData.filter(video => {
            return activeVideoId !== video.id
          }).map((video, index) => 
            <Link 
              className='secondaryCard__link' 
              to={`/videoplayer/${video.id}`}  
              key={index}>
              <SecondaryCard
                id={video.id}
                image={video.image}
                title={video.title}
                channel={video.channel}
                views={video.views}
                duration={video.duration}
              />
            </Link>
          )
        }
      </div>
     );
  }
}
 
SecondaryVideos.defaultProps = {
  videoData: []
}

export default SecondaryVideos;