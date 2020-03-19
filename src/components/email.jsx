import React, { useContext } from 'react';

import EmailHeader from './emailHeader';
import DMailState from '../state/dmailState';

function Email() {
  const { currentEmail, emailList } = useContext(DMailState);
  const emailData = emailList.filter(email => email.id === currentEmail)[0];

  return (
    <div id='email'>
      <EmailHeader />
      From {emailData.sender}
      <br />
      <br />
      {emailData.subject}
      <br />
      <br />
      {emailData.body}
    </div>
  )
}

export default Email;
