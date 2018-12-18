import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
  render() { 
    return ( 
      <form className='searchBar'>
        <input className='searchBar__input' type='text' name='searchInput' placeholder='Search' required />
        <button className='searchBar__button' href='https://www.mlb.com/' target='_blank'>
          <img className='searchBar__icon' src='./assets/Icons/Search.svg' alt='search bar icon'></img>
        </button>
      </form>
     );
  }
}
 
export default SearchBar;