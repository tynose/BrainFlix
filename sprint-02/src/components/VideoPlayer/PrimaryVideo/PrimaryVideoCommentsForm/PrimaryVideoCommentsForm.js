import React, { Component } from 'react';
import './PrimaryVideoCommentsForm.scss';

export default class PrimaryVideoCommentsForm extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.formReset = this.formReset.bind(this);

    this.state = {
      name: 'John Gibbons',
      comment: ''
    }
  }

  handleChange(event) {
    this.setState({
      comment: event.target.value
    })
  }
  

  formReset() {
    this.setState({
      comment: ''
    })
  }

  render() {    
    return (
      <div className='primaryVideoCommentsForm'>
        <form className='primaryVideoCommentsForm__form' onSubmit={(event) => {
            this.props.commentSubmit(event, this.state);
            this.formReset()
          }
        } >
          <input className='primaryVideoCommentsForm__input' type='text' name='commentInput' placeholder='Add a public comment' value={this.state.comment} onChange={this.handleChange} required />
          <div className='primaryVideoCommentsForm__buttons'>
            <button type='reset' onClick={() => this.formReset()} className='primaryVideoCommentsForm__cancelButton'>
              <span className='primaryVideoCommentsForm__cancelText'>cancel</span>
            </button>
            <button type='submit' className='primaryVideoCommentsForm__commentButton'>
              <span className='primaryVideoCommentsForm__commentText'>comment</span>
            </button>
          </div>
        </form>
      </div>
    )
  }
}
