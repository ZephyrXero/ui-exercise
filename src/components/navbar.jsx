import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import './navbar.scss';

function Navbar() {
  return (
    <div id='navbar'>
      <div id='menu-column'>
        <MenuIcon fontSize='large' />
        <EmailIcon fontSize='large' />
        <span className='logo-text'>DMail</span>
      </div>
      <div id='search-column'>
        <div id='search-bar'>
          <SearchIcon />
          Search Mail
        </div>
      </div>
      <div id='user-column'>
        <HelpOutlineIcon fontSize='large' />
        <AccountCircleIcon fontSize='large' />
      </div>
    </div>
  )
}

export default Navbar;
