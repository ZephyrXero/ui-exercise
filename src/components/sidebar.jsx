import React, { useContext } from 'react';

import './sidebar.scss';
import DMailState from '../state/dmailState';

function Sidebar() {
  const { actions } = useContext(DMailState);

  return (
    <div id='sidebar'>
      <button>Compose</button>
      <button onClick={() => actions.setCurrentEmail(null)}>Inbox</button>
      Starred
      Sent
      Drafts
      Spam
    </div>
  )
}

export default Sidebar;
