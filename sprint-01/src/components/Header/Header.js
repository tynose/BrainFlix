import React, { Component } from 'react';
import './Header.scss';
import BrainFLixLogo from '../Logos/BrainFlixLogo'
import SearchBar from './SearchBar/SearchBar';
import UploadButton from '../Buttons/UploadButton';
import UserProfile from '../UserProfile/UserProfile';

class Header extends Component {
  render() {
    return (
      <header className='header__content'>
        <BrainFLixLogo />
        <SearchBar />
        <div className='header__user'>
          <UploadButton />
          <UserProfile />
        </div>
      </header>
    );
  }
}

export default Header;