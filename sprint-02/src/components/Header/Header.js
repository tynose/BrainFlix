import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import UserProfile from '../UserProfile/UserProfile';

class Header extends Component {
  render() {
    return (
      <header className='header__content'>
        <Link className='brainFlix__link' to='/videplayer/:videoId'>
          <img className='brainFlix__image' src='/assets/Icons/BrainFlix Logo.svg' alt='BrainFlix Logo' />
        </Link>
        <SearchBar />
        <div className='header__user'>
          <Link className='header__upload' to='/uploadvideo'>
            <img className='header__uploadIcon' src='/assets/Icons/Content Upload.svg' alt='upload button icon' />
          </Link>
          <UserProfile />
        </div>
      </header>
    );
  }
}

export default Header;