import React, { Component } from 'react';
import './PrimaryVideoNewComment.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';

class PrimaryVideoNewComment extends Component {
  render() { 
    return ( 
      <div className='primaryVideoNewComment'>
        <Link to='/' className='primaryVideoNewComment__link'>
          <span className='primaryVideoNewComment__avator' src={this.props.avator} alt='User profile'></span>
        </Link>
        <div className='primaryVideoNewComment__info'>
          <span className='primaryVideoNewComment__name'>{this.props.name}</span>
          <span className='primaryVideoNewComment__timestamp'><Moment fromNow ago>{this.props.timestamp}</Moment> ago</span>
          <p className='primaryVideoNewComment__comment'>{this.props.comments}</p>
        </div>
        <button className='primaryVideoNewComment__delete' onClick={() => this.props.deleteComment(this.props.videoId, this.props.id)}>
          <FontAwesomeIcon className='primaryVideoNewComment__deleteIcon' icon="times" />
        </button>  
      </div>
    );
  }
}
 
export default PrimaryVideoNewComment ;