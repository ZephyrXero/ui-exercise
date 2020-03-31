import React, { useContext } from 'react';

import './dmail.scss';
import Email from '../components/email';
import EmailList from '../components/emailList';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import DMailState from '../state/dmailState';

function DMail() {
  const { currentEmail } = useContext(DMailState);

  return (
    <div id='dmail'>
      <Navbar />
      <div className='flex-row'>
        <Sidebar />
        <div id='content-container'>
          {currentEmail ? <Email /> : <EmailList />}
        </div>
      </div>
    </div>
  )
}

export default DMail;
