import React, { Component } from 'react';
import Header from '../Header';
<<<<<<< HEAD
import VideoPlayer from '../VideoPlayer/VideoPlayer';
=======
import Main from '../Main';
>>>>>>> bd99bb6d83e0bc91871ad8e2078bd5b7f31c0e34
import UploadVideo from '../UploadVideo/UploadVideo';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import './App.scss';

const API_KEY = 'eb17dfd1-1406-46da-9950-7304f723d3fe';
const baseUrl = 'https://project-2-api.herokuapp.com/';
const videoPath = 'videos/';
const queryString = '?api_key=' + API_KEY;

class App extends Component {
  constructor() {
    super();

    this.setActiveVideo = this.setActiveVideo.bind(this);

    this.state = {
      videoData: [],
      activeVideo: []
    }
  }

  componentDidMount() {       
    fetch(baseUrl + videoPath + queryString)
    .then(response => response.json())
    .then(data => {
      this.setState({
        videoData: data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  setActiveVideo(id) {    
    fetch(baseUrl + videoPath + id +  queryString)
    .then(response => response.json())
    .then(data => {
      this.setState({
        activeVideo: data
      })
    })
    .catch(err => {
      console.log(err)
    })
  };
  
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/uploadvideo' exact component={UploadVideo} />
            <Route path='/videoplayer' exact render={() => <Main onVideoChange={this.setActiveVideo} {...this.state} />} />
            <Route path='/videoplayer/:videoId' exact render={(props) => {
                  return <Main onVideoChange={this.setActiveVideo} {...this.state} {...props} />
                }
              }
            />
            <Route path='/' render={() =>
                <Redirect to="/videoplayer" component={Main} />
              }
            />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
