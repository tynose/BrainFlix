import React, { Component } from 'react';
import './SecondaryCard.scss';

class SecondaryCard extends Component {
  render() {
    return ( 
      <div
        id={this.props.id}
        className='secondaryCard'
      >
        <div className='secondaryCard__thumbnail'>
          <span className='secondaryCard__duration'>{this.props.duration}</span>
          <img className='secondaryCard__image' src={this.props.image} alt={this.props.title}/>
        </div>
        <div className='secondaryCard__info'>
          <h5 className='secondaryCard__description'>{this.props.title}</h5>
          <span className='secondaryCard__channel'>{this.props.channel}</span>
          <span className='secondaryCard__views'>{this.props.views + ' M views'}</span>
        </div>
      </div>   
     );
  }
}
 
export default SecondaryCard;
