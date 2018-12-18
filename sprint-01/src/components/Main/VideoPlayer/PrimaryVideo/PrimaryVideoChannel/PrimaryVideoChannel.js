import React, { Component } from 'react';
import './PrimaryVideoChannel.scss'
import SubscribeButton from '../../../../Buttons/SubscribeButton';


class PrimaryVideoChannel extends Component {
  render() { 
    return ( 
      <div className='primaryVideoChannel'>
        <div className='primaryVideoChannel__card'>
          <div className='primaryVideoChannel__info'>
            <a className='primaryVideoChannel__authorLink' href='#' target='_blank'/>
            <div className='primaryVideoChannel__name'>
              <span className='primaryVideoChannel__channel'>mlb</span>
              <span className='primaryVideoChannel__publishDate'>{`Published on ${this.props.videoPublishDate}`}</span>
            </div>
          </div>
          <SubscribeButton {...this.props} />
        </div>
        <div className='primaryVideoChannel__videoInfo'>
          <p className='primaryVideoChannel__videoDescription'>{this.props.videoCaption}</p>
          <a className='primaryVideoChannel__showMore'><span>show more</span></a>
        </div>
      </div>
     );
  }
}
 
export default PrimaryVideoChannel;