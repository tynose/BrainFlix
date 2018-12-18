import React, { Component } from 'react';
import './Buttons.scss';

class CancelButton extends Component {
  render() {
    return (
      <button className='cancel' href='https://www.mlb.com/' target='_blank'>
        <span className='cancel__text'>cancel</span>
      </button>
    );
  }
}

export default CancelButton;