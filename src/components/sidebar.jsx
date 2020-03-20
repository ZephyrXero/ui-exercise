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
      <button><AddIcon /> Compose</button>
      <button onClick={() => actions.setCurrentEmail(null)}><InboxIcon /> Inbox</button>
      <StarIcon /> Starred
      <SendIcon /> Sent
      <InsertDriveFileIcon /> Drafts
      <ReportIcon /> Spam
    </div>
  )
}

export default Sidebar;
