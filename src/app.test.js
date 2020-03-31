import React from 'react';
import { render } from '@testing-library/react';

import App from './app';

describe('Application', () => {
  test('should Render', () => {
    const testApp = render(<App />);
    const dmailLogo = testApp.getByText('DMail');

    expect(dmailLogo).toBeInTheDocument();
  });
})
