import React, { Component } from 'react';
import './PrimaryVideoTheatre.scss'

const API_KEY = 'eb17dfd1-1406-46da-9950-7304f723d3fe';
const queryString = '?api_key=' + API_KEY;

class PrimaryVideoTheatre extends Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
    this.state = {
      video: '',
    }
  }

  componentDidUpdate(prevProps) { 
    if (this.props.video !== prevProps.video) {
      this.setState({
        video: `${this.props.video}${queryString}`
      })
      const videoNode = this.video.current;
      videoNode.load()
    }
  }
  
  render() { 
    return ( 
      <div className='PrimaryVideoTheatre'>
        <video className='PrimaryVideoTheatre__videoPlayer' id={this.props.id} ref={this.video} controls>
          <source src={this.state.video} type='video/mp4' />
        </video>
        <div className='PrimaryVideoTheatre__info'>
          <h4 className='PrimaryVideoTheatre__caption'>{this.props.title}</h4>
          <div className='PrimaryVideoTheatre__stats'>
            <span className='PrimaryVideoTheatre__views'>{`${this.props.views} views`}</span>
            <div className='PrimaryVideoTheatre__buttons'>
              <div className='PrimaryVideoTheatre__button'>
                <button className='PrimaryVideoTheatre__link'>
                  <img className='PrimaryVideoTheatre__icon PrimaryVideoTheatre__icon--thumbsUp'
                    src='/assets/Icons/Thumbs Up.svg' alt='like' />
                </button>
                <span>{`${this.props.thumbsUp} k`}</span>
              </div>
              <div className='PrimaryVideoTheatre__button PrimaryVideoTheatre__icon--thumbsDown'>
                <button className='PrimaryVideoTheatre__link' >
                  <img className='PrimaryVideoTheatre__icon' src='/assets/Icons/Thumbs Down.svg' alt='dislike' />
                </button>
                <span>{`${this.props.thumbsDown} k`}</span>
              </div>
              <div className='PrimaryVideoTheatre__button PrimaryVideoTheatre__icon--share'>
                <button className='PrimaryVideoTheatre__link'>
                  <img className='PrimaryVideoTheatre__icon' src='/assets/Icons/Share.svg' alt='share' />
                </button>
                <span>share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}

PrimaryVideoTheatre.defaultProps = {
  video: ''
}
 
export default PrimaryVideoTheatre;