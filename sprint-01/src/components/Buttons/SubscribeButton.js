import React, { Component } from 'react';
import './Buttons.scss';

class SubscribeButton extends Component {
  render() { 
    return ( 
      <button className='subscribe' href='https://www.mlb.com/' target='_blank'>
        <span className='subscribe__text'>subscribe</span>
        <span className='subscribe__numbers'>{`${this.props.subscribers} m`}</span>
      </button>
     );
  }
}
 
export default SubscribeButton;