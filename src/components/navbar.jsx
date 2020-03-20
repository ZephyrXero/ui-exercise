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
      <MenuIcon />
      <EmailIcon />
      <span className='logo-text'>DMail</span>
      Search bar
      <SearchIcon />
      <HelpOutlineIcon />
      <AccountCircleIcon />
    </div>
  )
}

export default Navbar;
