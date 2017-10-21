// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Internal Dependencies
import App from './App';

// Begin Tests
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
