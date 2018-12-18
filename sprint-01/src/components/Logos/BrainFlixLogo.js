import React, { Component } from 'react';
import './Logos.scss'

class BrainFlixLogo extends Component {
  render() { 
    return ( 
      <a className='brainFlix__link' href='#' target='_blank'>
        <img className='brainFlix__image' src='./assets/Icons/BrainFlix Logo.svg' alt='BrainFlix Logo' />
      </a>
     );
  }
}
 
export default BrainFlixLogo;