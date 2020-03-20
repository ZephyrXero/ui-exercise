import React, { useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ReportIcon from '@material-ui/icons/Report';
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';

import './sidebar.scss';
import DMailState from '../state/dmailState';

function Sidebar() {
  const { actions } = useContext(DMailState);

  return (
    <div id='sidebar'>
      <button id='compose-button' onClick={() => console.warn('Compose not implemented')}>
        <AddIcon fontSize='large' /> Compose
      </button>
      <span className='sidebar-item' onClick={() => actions.setCurrentEmail(null)}><InboxIcon /> Inbox</span>
      <span className='sidebar-item'><StarIcon /> Starred</span>
      <span className='sidebar-item'><SendIcon /> Sent</span>
      <span className='sidebar-item'><InsertDriveFileIcon /> Drafts</span>
      <span className='sidebar-item'><ReportIcon /> Spam</span>
    </div>
  )
}

export default Sidebar;
