import React, { Component } from 'react';
import './VideoPlayer.scss';
import PrimaryVideo from './PrimaryVideo/PrimaryVideo';
import SecondaryVideos from './SecondaryVideos/SecondaryVideos';
import { withRouter } from 'react-router-dom';

class VideoPlayer extends Component {
  constructor() {
    super();

    this.commentSubmit = this.commentSubmit.bind(this);
    this.getActiveVideo = this.getActiveVideo.bind(this);
    this.deleteComment = this.deleteComment.bind(this);

    this.state = {
      videoData: [],
      activeVideo: []
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:8080/videos')
      .then(response => response.json())
      .then(videos => {
        this.setState({
          videoData: videos
        })
      })
      .catch(err => {
        console.log(err)
      })
    this.getActiveVideo()
  }

  getActiveVideo(){
    fetch(`http://localhost:8080/videos/${this.props.match.params.videoId}`)
      .then(response => response.json())
      .then(video => {
        this.setState({
          activeVideo: video
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteComment(videoId, commentId) {
    const init = {
      method: 'DELETE',
    };
    fetch(`http://localhost:8080/videos/${videoId}/comments/${commentId}`, init)
      .then(response => response.json())
      .then(() => {
        return this.getActiveVideo();
      })
      .catch(err => {
        console.log(err)
      })
  }

  commentSubmit(event, data) {
    event.preventDefault();
    const init = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    };
    
    fetch(`http://localhost:8080/videos/${this.props.match.params.videoId}/comments`, init)
      .then(response => response.json())
      .then(() => { 
        return this.getActiveVideo();
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.getActiveVideo()
    }
  }
  
  render() { 
    const { videoData, activeVideo } = this.state;

    return ( 
      <div className='videoPlayer'>
        <PrimaryVideo activeVideo={activeVideo} commentSubmit={this.commentSubmit} deleteComment={this.deleteComment}/> 
        <SecondaryVideos
          {...this.props}
          videoData={videoData}
        />
      </div>
     );
  }
}
 
export default withRouter(VideoPlayer);