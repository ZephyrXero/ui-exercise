import React from 'react';

import './app.scss';
import DMail from './pages/dmail';
import { DMailStateProvider } from './state/dmailState';

function App() {
  // TODO: Add ReactRouter and history so can navigate with browser Back & Forward
  return (
    <div className="app">
      <DMailStateProvider>
        <DMail />
      </DMailStateProvider>
    </div>
  );
}

export default App;
