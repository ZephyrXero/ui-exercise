import React from 'react';
import { render } from '@testing-library/react';

import DMail from './dmail';
import { DMailState } from '../state/dmailState';

describe('DMail Page', () => {
  const testState = {
    currentEmail: null,
    emailList: [
      {
        id: '1',
        subject: 'Hello',
        sender: 'bob.smith@gmail.com',
        body: 'test body',
        tags: ['work'],
        date: '2017-03-05T03:25:43.511Z',
      },
      {
        id: '2',
        subject: 'Important information about your account',
        sender: 'jon.doe@gmail.com',
        body: 'test message about account',
        tags: ['travel'],
        date: '2020-03-27T10:25:43.511Z',
      },
    ]
  };

  test('should render with list', () => {
    const page = render(
      <DMailState.Provider value={testState}>
        <DMail />
      </DMailState.Provider>
    );
    const list = page.getByTestId('email-list');

    expect(page.container.firstChild).toMatchSnapshot();
    expect(list).toBeInTheDocument();
  });

  test.skip('should show individual emails when clicked', () => {
    // make sure test email displays once clicked

    // expect(testSubject).toBe(expectedSubject)
    // expect(lastWordInBody).toBe(expectedWord)
  });
});
