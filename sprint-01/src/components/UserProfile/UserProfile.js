import React, { Component } from 'react';
import './UserProfile.scss'

class UserProfile extends Component {
  render() { 
    return ( 
      <div className='user'>
        <a className='user__link' href='#' target='_blank'>
          <img className='user__avator' src='./assets/Images/john_gibbons.jpg' alt='User profile'></img>
        </a>
      </div>
     );
  }
}
 
export default UserProfile;