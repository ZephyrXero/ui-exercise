import React, { useContext } from 'react';

import './emailList.scss';
import ListHeader from './listHeader';
import DMailState from '../state/dmailState';

function EmailList() {
  const { actions, emailList } = useContext(DMailState);

  return (
    <div id='email-list'>
      <ListHeader />
      {emailList.map(email => {
        return (
          <div className='email-preview' key={email.id} onClick={() => selectEmail(email.id)}>
            <span className='sender'>{email.sender}</span>
            <span className='subject'>{email.subject}</span>
            {/*<span className='body'>{email.body}</span>*/}
            <span className='date'>{new Date(email.date).toLocaleString()}</span>
          </div>
        );
      })}
    </div>
  );

  function selectEmail(id) {
    actions.setCurrentEmail(id);
  }
}

export default EmailList;
