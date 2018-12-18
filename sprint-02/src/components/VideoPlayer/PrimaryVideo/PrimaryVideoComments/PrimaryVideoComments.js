import React, { Component } from 'react';
import './PrimaryVideoComments.scss';
import UserProfile from '../../../UserProfile/UserProfile';
import PrimaryVideoNewComment from '../PrimaryVideoNewComment/PrimaryVideoNewComment';
import PrimaryVideoCommentsForm from '../PrimaryVideoCommentsForm/PrimaryVideoCommentsForm';

class PrimaryVideoComments extends Component {
 
  render() { 
    const { comments, commentSubmit } = this.props;    
    return ( 
      <div className='primaryVideoComments'>
        <div className='primaryVideoComments__newComment'>
          <UserProfile className='primaryVideoComments__avator' />
          <PrimaryVideoCommentsForm commentSubmit={commentSubmit} />
        </div> 
        <div className='primaryVideoComments__commentList'>
          {comments.map((comment, index) => 
            <PrimaryVideoNewComment 
              key={index}
              avator={comment.avator}
              name={comment.name}
              timestamp={comment.timestamp}
              comments={comment.comment}
            />
          )}
        </div>
      </div>
    );
  }
}

PrimaryVideoComments.defaultProps = {
  comments: []
}
 
export default PrimaryVideoComments;