import React, { Component } from 'react';
import './Buttons.scss';



class UploadButton extends Component {
  render() { 
    return ( 
      <button className='upload' href='https://www.mlb.com/' target='_blank'>
        <img className='upload__icon' src='./assets/Icons/Content Upload.svg' alt='upload button icon'></img>
      </button>
     );
  }
}
 
export default UploadButton;