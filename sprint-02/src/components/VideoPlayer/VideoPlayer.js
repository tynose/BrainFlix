import React, { Component } from 'react';
import './VideoPlayer.scss';
import PrimaryVideo from './PrimaryVideo/PrimaryVideo';
import SecondaryVideos from './SecondaryVideos/SecondaryVideos';
import { withRouter } from 'react-router-dom';

const API_KEY = 'eb17dfd1-1406-46da-9950-7304f723d3fe';
const baseUrl = 'https://project-2-api.herokuapp.com/';
const videoPath = 'videos/';
const commentsPath = '/comments/'
const queryString = '?api_key=' + API_KEY;

class VideoPlayer extends Component {
  constructor() {
    super();

    this.commentSubmit = this.commentSubmit.bind(this)
    this.getActiveVideo = this.getActiveVideo.bind(this)

    this.state = {
      videoData: [],
      activeVideo: []
    }
  }
  
  componentDidMount() {
    fetch(baseUrl + videoPath + queryString)
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
    fetch(`${baseUrl}${videoPath}${this.props.match.params.videoId}${queryString}`)
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

  commentSubmit(event, data) {
    event.preventDefault();
    const init = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    };
    
    fetch(`${baseUrl}${videoPath}${this.props.match.params.videoId}${commentsPath}${queryString}`, init)
      .then(response => response.json())
      .then(video => { 
        return this.getActiveVideo()
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
        <PrimaryVideo activeVideo={activeVideo} commentSubmit={this.commentSubmit}/> 
        <SecondaryVideos
          {...this.props}
          videoData={videoData}
        />
      </div>
     );
  }
}
 
export default withRouter(VideoPlayer);