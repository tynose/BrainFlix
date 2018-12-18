import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.scss'

class UserProfile extends Component {
  render() { 
    return ( 
      <div className='user'>
        <Link to='/' className='user__link'>
          <img className='user__avator' src='/assets/Images/john_gibbons.jpg' alt='User profile'></img>
        </Link>
      </div>
     );
  }
}
 
export default UserProfile;