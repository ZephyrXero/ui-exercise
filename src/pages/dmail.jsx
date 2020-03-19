import React from 'react';

import './dmail.scss';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { DMailPageState } from '../state/dmailState';

function DMail() {
  return (
    <div id='dmail'>
      <DMailPageState>
        <Navbar />
        <div className='flex-row'>
          <Sidebar />
          <div id='content-container'>
            header
            content
          </div>
        </div>
      </DMailPageState>
    </div>
  )
}

export default DMail;
