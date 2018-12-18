import React, { Component } from 'react';
import './PrimaryVideoComments.scss';
import UserProfile from '../../../../UserProfile/UserProfile';
import CancelButton from '../../../../Buttons/CancelButton';
import CommentButton from '../../../../Buttons/CommentButton';
import PrimaryVideoNewComment from '../PrimaryVideoNewComment/PrimaryVideoNewComment';

class PrimaryVideoComments extends Component {
  render() { 
    const comments = this.props.comments;
  
    return ( 
      <div className='primaryVideoComments'>
        <div className='primaryVideoComments__newComment'>
          <UserProfile className='primaryVideoComments__avator' />
          <form className='primaryVideoComments__form'>
            <input class='primaryVideoComments__input' type='text' name='commentInput' placeholder='Add a public comment' required />
            <div class='primaryVideoComments__buttons'>
              <CancelButton />
              <CommentButton />
            </div>
          </form>
        </div> 
        <div className='primaryVideoComments__commentList'>
          {comments.map(comment => 
            <PrimaryVideoNewComment 
              avator={comment.avator}
              name={comment.name}
              timestamp={comment.timestamp}
              comment={comment.comment}
            />
          )}
        </div>
      </div>
    );
  }
}
 
export default PrimaryVideoComments;