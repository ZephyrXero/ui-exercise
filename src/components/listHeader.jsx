import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';

import './listHeader.scss';
import EmailCounter from './emailCounter';

function ListHeader() {
  return (
    <div id='list-header'>
      <RefreshIcon />
      <span className='group-label'>Unread</span>
      <EmailCounter />
    </div>
  );
}

export default ListHeader;
