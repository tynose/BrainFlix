import React, { Component } from 'react';
import './PrimaryVideoChannel.scss'

class PrimaryVideoChannel extends Component {
  render() { 
    return ( 
      <div className='primaryVideoChannel'>
        <div className='primaryVideoChannel__card'>
          <div className='primaryVideoChannel__info'>
            <button className='primaryVideoChannel__authorLink'/>
            <div className='primaryVideoChannel__name'>
              <span className='primaryVideoChannel__channel'>{this.props.channel}</span>
              <span className='primaryVideoChannel__publishDate'>{'Published on Oct 14, 2015'}</span>
            </div>
          </div>
          <button className='primaryVideoChannel__subscribe'>
            <span className='primaryVideoChannel__subscribeText'>subscribe</span>
            <span className='primaryVideoChannel__subscribeNumbers'>{this.props.subscriberCount}</span>
          </button>
        </div>
        <div className='primaryVideoChannel__videoInfo'>
          <p className='primaryVideoChannel__videoDescription'>{this.props.description}</p>
          <button className='primaryVideoChannel__showMore'><span>show more</span></button>
        </div>
      </div>
     );
  }
}
 
export default PrimaryVideoChannel;