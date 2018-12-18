import React, { Component } from 'react';
import './SecondaryCard.scss';

class SecondaryCard extends Component {
  render() { 
    return ( 
      <div
        id={this.props.id}
        className='secondaryCard'
        onClick={() => this.props.onClick(this.props.id)}
      >
        <a className='secondaryCard__thumbnail'>
          {this.props.isActive && <span className='secondaryCard__isActive'>Now Playing</span>}
          <img className='secondaryCard__image' src={this.props.thumbnail} alt={this.props.videoTitle}/>
        </a>
        <div className='secondaryCard__info'>
          <h5 className='secondaryCard__description'>{this.props.videoTitle}</h5>
          <span className='secondaryCard__channel'>{this.props.channel}</span>
          <span className='secondaryCard__views'>{this.props.views + ' M views'}</span>
        </div>
      </div>  
     );
  }
}
 
export default SecondaryCard;
