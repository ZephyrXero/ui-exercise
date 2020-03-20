import React, { useContext } from 'react';
import ArchiveIcon from '@material-ui/icons/Archive';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ReportIcon from '@material-ui/icons/Report';

import DMailState from '../state/dmailState';

function EmailHeader() {
  const { actions, currentEmail, emailList } = useContext(DMailState);

  return (
    <div id='email-header'>
      <ArrowBackIcon />
      |
      <ArchiveIcon />
      <ReportIcon />
      <DeleteIcon />
      <MoreVertIcon />
      |
      <span className='email-counter'>{currentEmail} of {emailList.length}</span>
      <button onClick={goToPrevious}><NavigateBeforeIcon /></button>
      <button onClick={goToNext}><NavigateNextIcon /></button>
    </div>
  );

  function goToPrevious() {
    if(currentEmail === '1') {
      actions.setCurrentEmail(emailList.length)
    }
    else {
      actions.setCurrentEmail(Number(currentEmail) - 1)
    }
  }

  function goToNext() {
    if(currentEmail === String(emailList.length)) {
      actions.setCurrentEmail('1')
    }
    else {
      actions.setCurrentEmail(Number(currentEmail) + 1)
    }
  }
}

export default EmailHeader;
