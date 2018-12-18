import React, { Component } from 'react';
import './PrimaryVideoComments.scss';
import UserProfile from '../../../../UserProfile/UserProfile';
import PrimaryVideoNewComment from '../PrimaryVideoNewComment/PrimaryVideoNewComment';

const API_KEY = 'eb17dfd1-1406-46da-9950-7304f723d3fe';
const baseUrl = 'https://project-2-api.herokuapp.com/';
const videoPath = 'videos/';
const commentsPath = '/comments/';
const queryString = '?api_key=' + API_KEY;

class PrimaryVideoComments extends Component {
  constructor(props) {
    super(props);
    

    this.commentForm = React.createRef();
    this.comment = React.createRef();
    this.state = {
      comments: this.props.comments
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.comments !== prevProps.comments) {
      this.setState({
        video: this.props.comments
      })
    }
  }

  commentSubmit = (id) => (e) => {
    e.preventDefault();
    let comment = this.comment.current.value;
    let newComment = {
      name: 'John Gibbons',
      comment: comment
    }

    const init = {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: {
        'content-type': 'application/json'
      }
    };

    fetch(baseUrl + videoPath + id + commentsPath + queryString, init)
      .then(resp => resp.json())
      .then(newComment => {
        this.setState({
          comments: newComment
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() { 

    const { comments, id } = this.props;

    return ( 
      <div className='primaryVideoComments'>
        <div className='primaryVideoComments__newComment'>
          <UserProfile className='primaryVideoComments__avator' />
          <form onSubmit={this.commentSubmit(id)} className='primaryVideoComments__form' ref={this.commentForm}>
            <input className='primaryVideoComments__input' type='text' name='commentInput' placeholder='Add a public comment' ref={this.comment} required />
            <div className='primaryVideoComments__buttons'>
              <button type='reset' className='primaryVideoComments__cancelButton'>
                <span className='primaryVideoComments__cancelText'>cancel</span>
              </button>
              <button type='submit' className='primaryVideoComments__commentButton'>
                <span className='primaryVideoComments__commentText'>comment</span>
              </button>
            </div>
          </form>
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