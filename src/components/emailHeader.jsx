import React, { useContext } from 'react';

import DMailState from '../state/dmailState';

function EmailHeader() {
  const { actions, currentEmail, emailList } = useContext(DMailState);

  return (
    <div id='email-header'>
      Action Icons...
      <span className='email-counter'>{currentEmail} of {emailList.length}</span>
      <button onClick={goToPrevious}>Previous</button>
      <button onClick={goToNext}>Next</button>
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
