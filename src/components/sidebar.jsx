import React, { useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelIcon from '@material-ui/icons/Label';
import ReportIcon from '@material-ui/icons/Report';
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';

import './sidebar.scss';
import DMailState from '../state/dmailState';

function Sidebar() {
  const { actions, emailList } = useContext(DMailState);
  const tags = emailList.reduce((tagList, email) => {
    email.tags.forEach(tag => {
      if(!tagList.includes(tag)) {
        tagList.push(tag);
      }
    });

    return tagList;
  }, []);

  return (
    <div id='sidebar'>
      <button id='compose-button' onClick={() => console.warn('Compose not implemented')}>
        <AddIcon fontSize='large' /> Compose
      </button>
      <button
        className='sidebar-item flat-button'
        onClick={() => actions.filterEmail(null)}
      >
        <InboxIcon /> Inbox
      </button>
      <span className='sidebar-item'><StarIcon /> Starred</span>
      <span className='sidebar-item'><SendIcon /> Sent</span>
      <span className='sidebar-item'><InsertDriveFileIcon /> Drafts</span>
      <span className='sidebar-item'><ReportIcon /> Spam</span>
      {Boolean(tags.length) &&
        tags.map(tag => (
          <button
            className='sidebar-item flat-button'
            key={tag}
            onClick={() => actions.filterEmail(tag)}
          >
            <LabelIcon /> {tag}
          </button>
        ))
      }
    </div>
  )
}

export default Sidebar;
