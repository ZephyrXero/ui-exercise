import React from 'react';

import './dmail.scss';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

function DMail() {
  return (
    <div id='dmail'>
      <Navbar />
      <div className='flex-row'>
        <Sidebar />
        <div id='content-container'>
          header
          content
        </div>
      </div>
    </div>
  )
}

export default DMail;
