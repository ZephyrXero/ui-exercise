import React, { useContext } from 'react';
import parse from 'html-react-parser';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './email.scss';
import EmailHeader from './emailHeader';
import DMailState from '../state/dmailState';

function Email() {
  const { currentEmail, emailList } = useContext(DMailState);
  const emailData = emailList.filter(email => email.id === currentEmail)[0];

  return (
    <div id='email'>
      <EmailHeader />
      <div className='email-container'>
        <div className='subject'>
        {emailData.subject}
        {emailData.tags ?
          emailData.tags.map(tag => (<span className='tag' key={tag}>{tag}</span>))
          :
          null
        }
        </div>
        <div className='metadata'>
          <AccountCircleIcon />
            <div className='from-to'>
              <div className='flex-row'>
                From <span className='sender'>{emailData.sender}</span>
              </div>
              <div className='flex-row'>
                To me
              </div>
            </div>
          <span className='sent-date'>{new Date(emailData.date).toLocaleDateString()}</span>
        </div>
        <div className='body'>
          {parse(emailData.body)}
        </div>
      </div>
    </div>
  )
}

export default Email;
