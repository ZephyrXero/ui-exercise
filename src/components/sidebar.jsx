import React from 'react';

import './sidebar.scss';

function Sidebar() {
  return (
    <div id='sidebar'>
      <button>Compose</button>
      Inbox
      Starred
      Sent
      Drafts
      Spam
    </div>
  )
}

export default Sidebar;
