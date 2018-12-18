import React, { Component } from 'react';
import './PrimaryVideoNewComment.scss';
import { Link } from 'react-router-dom';

class PrimaryVideoNewComment extends Component {
  render() { 
    
    return ( 
      <div className='primaryVideoNewComment'>
        <Link to='/' className='primaryVideoNewComment__link'>
          <span className='primaryVideoNewComment__avator' src={this.props.avator} alt='User profile'></span>
        </Link>
        <div className='primaryVideoNewComment__info'>
          <span className='primaryVideoNewComment__name'>{this.props.name}</span>
          <span className='primaryVideoNewComment__timestamp'>{this.props.timestamp}</span>
          <p className='primaryVideoNewComment__comment'>{this.props.comments}</p>
        </div>
      </div>
    );
  }
}
 
export default PrimaryVideoNewComment ;