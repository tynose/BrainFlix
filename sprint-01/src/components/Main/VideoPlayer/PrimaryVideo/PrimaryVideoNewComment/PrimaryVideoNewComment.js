import React, { Component } from 'react';
import './PrimaryVideoNewComment.scss';
// import UserProfile from '../../../../UserProfile/UserProfile';

class PrimaryVideoNewComment extends Component {
  render() { 
    return ( 
      <div className='primaryVideoNewComment'>
        <a className='primaryVideoNewComment__link' href='#' target='_blank'>
          <img className='primaryVideoNewComment__avator' src={this.props.avator} alt='User profile'></img>
        </a>
        <div className='primaryVideoNewComment__info'>
          <span className='primaryVideoNewComment__name'>{this.props.name}</span>
          <span className='primaryVideoNewComment__timestamp'>{this.props.timestamp}</span>
          <p className='primaryVideoNewComment__comment'>{this.props.comment}</p>
        </div>
      </div>
    );
  }
}
 
export default PrimaryVideoNewComment ;