import React, { Component } from 'react';
import './PrimaryVideoTheatre.scss'

class PrimaryVideoTheatre extends Component {
  
  componentDidUpdate(prevProps) {
    if (prevProps.video !== this.props.video) {
      const videoNode = document.getElementById(this.props.id);
      videoNode.load()
    }
  }

  render() { 
    return ( 
      <div className='PrimaryVideoTheatre'>
        <video className='PrimaryVideoTheatre__videoPlayer' id={this.props.id} controls>
          <source src={this.props.video} type='video/mp4'></source>
        </video>
        <div className='PrimaryVideoTheatre__info'>
          <h4 className='PrimaryVideoTheatre__caption'>{this.props.videoTitle}</h4>
          <div className='PrimaryVideoTheatre__stats'>
            <span className='PrimaryVideoTheatre__views'>{`${this.props.views} views`}</span>
            <div className='PrimaryVideoTheatre__buttons'>
              <div className='PrimaryVideoTheatre__button'>
                <a className='PrimaryVideoTheatre__link' href='https://www.mlb.com/' target='_blank'>
                  <img className='PrimaryVideoTheatre__icon PrimaryVideoTheatre__icon--thumbsUp'
                    src='./assets/Icons/Thumbs Up.svg' alt='like' />
                </a>
                <span>{`${this.props.likes} k`}</span>
              </div>
              <div className='PrimaryVideoTheatre__button PrimaryVideoTheatre__icon--thumbsDown'>
                <a className='PrimaryVideoTheatre__link' href='https://www.mlb.com/' target='_blank'>
                  <img className='PrimaryVideoTheatre__icon' src='./assets/Icons/Thumbs Down.svg' alt='dislike' />
                </a>
                <span>{`${this.props.dislikes} k`}</span>
              </div>
              <div className='PrimaryVideoTheatre__button PrimaryVideoTheatre__icon--share'>
                <a className='PrimaryVideoTheatre__link' href='https://www.mlb.com/' target='_blank'>
                  <img className='PrimaryVideoTheatre__icon' src='./assets/Icons/Share.svg' alt='share' />
                </a>
                <span>share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default PrimaryVideoTheatre;