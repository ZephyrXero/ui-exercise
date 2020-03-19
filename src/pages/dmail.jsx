import React from 'react';

import './dmail.scss';
import Email from '../components/email';
import EmailList from '../components/emailList';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { DMailStateProvider, DMailState } from '../state/dmailState';

function DMail() {
  return (
    <div id='dmail'>
      <DMailStateProvider>
        <Navbar />
        <div className='flex-row'>
          <Sidebar />
          <div id='content-container' className='flex-column'>
          <DMailState.Consumer>
            {state => state.currentEmail ? <Email /> : <EmailList />}
          </DMailState.Consumer>
          </div>
        </div>
      </DMailStateProvider>
    </div>
  )
}

export default DMail;
