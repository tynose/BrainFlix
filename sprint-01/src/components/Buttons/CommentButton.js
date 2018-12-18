import React, { Component } from 'react';
import './Buttons.scss';

class CommentButton extends Component {
  render() {
    return (
      <button className='comment' href='https://www.mlb.com/' target='_blank'>
        <span className='comment__text'>comment</span>
      </button>
    );
  }
}

export default CommentButton;