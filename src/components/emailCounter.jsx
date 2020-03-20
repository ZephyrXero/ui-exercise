import React, { useContext } from 'react';

import DMailState from '../state/dmailState';

function EmailCounter() {
  const { currentEmail, emailList } = useContext(DMailState);

  return (
    <div className='email-counter'>
      {currentEmail ? currentEmail : `1-${emailList.length}`} of {emailList.length}
    </div>
  );
}

export default EmailCounter;
