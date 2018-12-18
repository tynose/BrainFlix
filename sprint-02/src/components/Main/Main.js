import React, { Component } from 'react';
import './Main.scss';
import { withRouter } from 'react-router-dom';
import VideoPlayer from './VideoPlayer/VideoPlayer';

class Main extends Component {
  
  componentDidMount() {
    this.props.onVideoChange(this.props.match.params.videoId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
      this.props.onVideoChange(this.props.match.params.videoId)
    }
  }
  
  render() { 
    return ( 
      <main>
        <VideoPlayer {...this.props} />
      </main>
     );
  }
}

Main.defaultProps = {
  activeVideo: []
}
 
export default withRouter(Main);