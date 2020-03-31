import React, { useContext } from 'react';

import './emailList.scss';
import ListHeader from './listHeader';
import unHtml from '../helpers/unHtml';
import DMailState from '../state/dmailState';

function EmailList() {
  const { actions, emailList, filterTag } = useContext(DMailState);

  return (
    <div id='email-list' data-testid='email-list'>
      <ListHeader />
      {emailList
        .filter(email => filterTag ? email.tags.includes(filterTag) : true)
        .map(email => {
          return (
            <div className='email-preview' key={email.id} onClick={() => selectEmail(email.id)}>
              <span className='sender'>{email.sender}</span>
              <span className='subject'>{email.subject}</span>
              <span className='body'>{unHtml(email.body)}</span>
              <span className='date'>{new Date(email.date).toLocaleString()}</span>
            </div>
          );
        })
      }
    </div>
  );

  function selectEmail(id) {
    actions.setCurrentEmail(id);
  }
}

export default EmailList;
