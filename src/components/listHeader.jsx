import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';

function ListHeader() {
  return (
    <div id='list-header'>
      <RefreshIcon />
      Unread
      Email Count...
    </div>
  );
}

export default ListHeader;
